import { currMode, changeModeTo } from "./changeMode";

let currElement: HTMLElement = document.createElement("div");

export function selectMouseMove(e) {
  if (currElement === null) {

  }
  currElement.classList.remove("_extension_resizer_mouseOver");
  console.log(`clientX: ${e.clientX}, clientY: ${e.clientY}`);
  currElement = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;
  console.log(currElement);
  currElement.classList.add("_extension_resizer_mouseOver");
}

document.addEventListener("click", (e) => {
  if (currMode === "select") {
    changeModeTo("option");
    console.log("currElement is");
    console.log(currElement);
    currElement.classList.remove("_extension_resizer_mouseOver");
    // currElement.classList.add("selected");

    // test
    let everyChild = currElement.querySelectorAll("*");
    console.log(everyChild);
    everyChild.forEach(elem => {
      console.log(getComputedStyle(elem).fontSize);
      let prevFontSize = +getComputedStyle(elem).fontSize.slice(0, -2);
      if (prevFontSize < 17) {
        (elem as HTMLElement).style.setProperty('font-size', `${prevFontSize + 3}px`, 'important');
      }
    })
  }
})