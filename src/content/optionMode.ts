import { currElement } from "./selectMode";

export interface Option {
  fontFamily: "None" | string;
  fontSize: number;
  sizeLimit: "None" | number;
}

export function applyResize(option: Option) {
  if (currElement === null) {
    console.log(`currElement is null. cannot run applySize.`);
  } else {
    let everyChild = Array.from(currElement.querySelectorAll("*"));
    everyChild.push(currElement);
    everyChild.forEach(elem => {
      // console.log(getComputedStyle(elem).fontSize);
      let prevFontSize = +getComputedStyle(elem).fontSize.slice(0, -2);
      console.log(`prevFontSize is : ${prevFontSize}`);
      // TODO: repair logic : option.fontSize의 + - 여부에 따라
      if (option.sizeLimit === "None" || (0 <= option.fontSize && prevFontSize < option.sizeLimit) || (option.fontSize < 0 && option.sizeLimit < prevFontSize)) {
        if (0 <= option.fontSize) {
          if (prevFontSize + option.fontSize < option.sizeLimit) {
            (elem as HTMLElement).style.setProperty('font-size', `${prevFontSize + option.fontSize}px`, 'important');
          } else {
            (elem as HTMLElement).style.setProperty('font-size', `${option.sizeLimit}px`, 'important');
          }
        } else { // option.fontSize < 0
          if (option.sizeLimit < prevFontSize + option.fontSize) {
            (elem as HTMLElement).style.setProperty('font-size', `${prevFontSize + option.fontSize}px`, 'important');
          } else {
            (elem as HTMLElement).style.setProperty('font-size', `${option.sizeLimit}px`, 'important');
          }
        }
      }
      if (option.fontFamily !== "None") {
        // apply fontfamily.
        (elem as HTMLElement).style.setProperty('font-family', option.fontFamily);
        console.log("apply font-family.");
      }
    })
  }
}