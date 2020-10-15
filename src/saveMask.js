import { saveSvgAsPng } from "save-svg-as-png";
// export const saveMask = (image) => {
//     let tempATag = document.createElement("a");
//     tempATag.href = image.file;
//     const splitName = image.name.split(".");
//     tempATag.download = `${splitName[0]}-mask.${splitName[1]}`;
//     document.body.appendChild(tempATag);
//     tempATag.click();
//     document.body.removeChild(tempATag);
// };

export const createMask = (name) => {
    const t = document.querySelector("#image").cloneNode(true);
    t.setAttribute("style", "backgroundImage:none");
    t.childNodes.forEach((el) => (el.style.opacity = 1));
    const filename = `${name.split(".")[0]}-mask.png`;
    saveSvgAsPng(t, filename);
};
