import panzoom from "panzoom";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import {
    addPoint,
    updatePoint,
    finishPath,
    addLayer,
    deleteLastPoint,
    nextImage,
    previousImage,
} from "../../actions";

import { saveMask } from "../Header";

function Canvas({
    points,
    layers,
    paths,
    activeColor,
    amountOfPaths,
    image,
    addLayer,
    updatePoint,
    deleteLastPoint,
    finishPath,
    addPoint,
    nextImage,
    previousImage,
}) {
    const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
    const [mouseDown, setMouseDown] = useState(false);
    const [selectedPoint, setSelectedPoint] = useState(null);

    const ref = useRef();

    let panThing;
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        panThing = panzoom(document.querySelector("#image"), {
            maxZoom: 20,
            minZoom: 0.1,
            smoothScroll: false,
            beforeMouseDown: function (e) {
                var shouldIgnore = !e.altKey;
                return shouldIgnore;
            },
        });
        panThing.zoomTo(transform.x, transform.y, transform.scale);
        panThing.moveTo(transform.x, transform.y);

        // document.body.onkeydown = onKeyDown;
    }, [points]);

    const onKeyDown = (e) => {
        console.log(e);
        if (e.key === "Enter") {
            console.log("ENTER");
            addLayer(activeColor, amountOfPaths);
            finishPath();
        }
        if (e.ctrlKey) {
            if (e.key === "z") {
                console.log("Ctrl + z");
                deleteLastPoint();
            }
        }
        if (e.key === "d") {
            nextImage();
        }
        if (e.key === "a") {
            previousImage();
        }
        if (
            // eslint-disable-next-line eqeqeq
            e.keyCode == 83 &&
            (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
        ) {
            e.preventDefault();
            console.log("TRIED TO SAVE", image);
            saveMask(image);
        }
    };

    const getXY = (e) => {
        let rect = ref.current.getBoundingClientRect();
        const transform = ref.current.style.transform.split(",");

        let xScale = transform[0].replace("matrix(", "");
        let yScale = transform[3];

        let x = (e.clientX - rect.left) / xScale;
        let y = (e.clientY - rect.top) / yScale;

        return { x, y };
    };

    const onClick = (e) => {
        if (e.altKey) return;
        let { x, y } = getXY(e);
        console.log(`${x},${y}`);
        if (panThing) setTransform(panThing.getTransform());

        addPoint(`${x},${y}`);
    };

    const onCirclePressed = (e, i) => {
        if (e.altKey) return;
        setMouseDown(true);
        let { x, y } = getXY(e);
        updatePoint(`${x},${y}`, i);
        setSelectedPoint(i);
        e.stopPropagation();
    };

    const onMouseMoved = (e, i) => {
        if (mouseDown) {
            if (e.altKey) return;
            let { x, y } = getXY(e);
            updatePoint(`${x},${y}`, i);
            e.stopPropagation();
        }
    };

    const renderCircles = points.map((el, i) => (
        <circle
            key={el}
            cx={el.split(",")[0]}
            cy={el.split(",")[1]}
            r="5"
            stroke="black"
            fill="red"
            strokeWidth="2"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => onCirclePressed(e, i)}
        ></circle>
    ));

    const renderPaths = () => {
        layers.sort((a, b) => b.id - a.id);
        return layers.map((el, i) => (
            <polygon
                points={paths[i]}
                style={{ stroke: "white", fill: `${el.color}` }}
            ></polygon>
        ));
    };

    return (
        <div
            className="canvas"
            onMouseUp={(e) => setMouseDown(false)}
            onMouseMove={(e) => onMouseMoved(e, selectedPoint)}
            onKeyDown={(e) => onKeyDown(e)}
        >
            <svg
                ref={ref}
                style={{
                    backgroundImage:
                        image === undefined
                            ? `url(logo512.png)`
                            : `url(${image.file})`,
                }}
                onClick={onClick}
                id="image"
                width={image === undefined ? "512" : image.width}
                height={image === undefined ? "512" : image.height}
            >
                <polyline
                    points={points}
                    strokeWidth="3"
                    style={{ stroke: "white", fill: "none" }}
                />
                {renderCircles}
                {renderPaths()}
            </svg>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        points: state.points.points,
        paths: state.points.paths,
        layers: state.layers.layers,
        activeColor: state.colors.colors[state.colors.selectedColor],
        amountOfPaths: state.points.paths.length,
        image: state.images.images[state.images.activeImage],
    };
};

export default connect(mapStateToProps, {
    addPoint,
    updatePoint,
    finishPath,
    addLayer,
    deleteLastPoint,
    nextImage,
    previousImage,
})(Canvas);
