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

export const createMask = () => {
    const t = document.querySelector("#image").cloneNode(true);
    t.setAttribute("style", "backgroundImage:none");
    saveSvgAsPng(t, "test.png");
};
