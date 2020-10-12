import panzoom from "panzoom";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { addPoint, updatePoint, finishPath } from "../../actions";

function Canvas({ points, paths, updatePoint, finishPath, addPoint }) {
    const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
    const [mouseDown, setMouseDown] = useState(false);
    const [selectedPoint, setSelectedPoint] = useState(null);

    const ref = useRef();

    let panThing;
    useEffect(() => {
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

        document.body.onkeydown = onKeyDown;
    }, [points]);

    const onKeyDown = (e) => {
        if (e.code === "Enter") {
            console.log("Did it");
            finishPath();
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

    const renderPaths = paths.map((el) => (
        <polygon
            points={el}
            style={{ stroke: "white", fill: "none" }}
        ></polygon>
    ));

    return (
        <div
            className="canvas"
            onMouseUp={(e) => setMouseDown(false)}
            onMouseMove={(e) => onMouseMoved(e, selectedPoint)}
        >
            <svg
                ref={ref}
                style={{ backgroundImage: `url(logo512.png)` }}
                onClick={onClick}
                id="image"
                width="512"
                height="512"
            >
                <polyline
                    points={points}
                    strokeWidth="3"
                    style={{ stroke: "white", fill: "none" }}
                />
                {renderCircles}
                {renderPaths}
            </svg>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { points: state.points.points, paths: state.points.paths };
};

export default connect(mapStateToProps, { addPoint, updatePoint, finishPath })(
    Canvas
);
