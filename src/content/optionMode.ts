import { currElement } from "./selectMode";

export interface Option {
  fontFamily: "None" | string;
  fontSize: number;
  maxSizeLimit: "None" | number;
}

export function applyResize(option: Option) {
  if (currElement === null) {
    console.log(`currElement is null. cannot run applySize.`);
  } else {
    let everyChild = currElement.querySelectorAll("*");
    everyChild.forEach(elem => {
      // console.log(getComputedStyle(elem).fontSize);
      let prevFontSize = +getComputedStyle(elem).fontSize.slice(0, -2);
      if (option.maxSizeLimit === "None" || prevFontSize < option.maxSizeLimit) {
        (elem as HTMLElement).style.setProperty('font-size', `${prevFontSize + option.fontSize}px`, 'important');
      }
      if (option.fontFamily !== "None") {
        // apply fontfamily.
        console.log("apply font-family.");
      }
    })
  }
}