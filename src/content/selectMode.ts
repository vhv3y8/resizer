import { currMode, changeModeTo } from "./changeMode";
import { applyResize } from "./optionMode";
import { option } from "./storage";
import { elements } from "./changeMode";
import { preventElems } from "./initElements";

export let currElement: HTMLElement | null = null;
let detectedElement: HTMLElement = document.createElement("div");

// let preventSelectionList: HTMLElement[] = elements.select;

export const selectModeEvents = {
  mousemove: selectMouseMove,
  click: selectLeftClick,
  contextmenu: selectRightClick
}

/**
 *  mousemove event
 */
export function selectMouseMove(e: MouseEvent) {
  // console.log(`clientX: ${e.clientX}, clientY: ${e.clientY}`);
  detectedElement = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;

  if (currElement !== null && detectedElement !== currElement) {
    currElement.classList.remove("_extension_resizer_mouseOver");
    console.log("mousemove: element changed.");
  }

  if (preventElems.includes(detectedElement) && detectedElement !== currElement) {
    currElement = null;
    console.log("mousemove: mouse is on inserted Element.");
  }

  // show log
  if (detectedElement !== currElement) {
    console.log("currElement: ", currElement);
    console.log("detectedElement: ", detectedElement);
  }

  if (detectedElement !== null && detectedElement !== currElement && !preventElems.includes(detectedElement)) {
    currElement = detectedElement;
    currElement.classList.add("_extension_resizer_mouseOver");
    console.log("mousemove: changing current element.");
  }
}

/**
 *  left click event
 */
export function selectLeftClick(e: MouseEvent) {
  if (currMode === "select") {
    if (currElement === null || preventElems.includes(document.elementFromPoint(e.clientX, e.clientY) as HTMLElement)) {
      console.log("leftClick: current Element is null.");
    } else {
      changeModeTo("option");
      console.log("leftClick: currElement is", currElement);

      // test
      // applyResize({ fontFamily: "Inconsolata", fontSize: 3, sizeLimit: 19 });
    }
    // currElement.classList.add("selected");
  }
}

/**
 *  right click event (contextmenu)
*/
export function selectRightClick(e: MouseEvent) {
  e.preventDefault();
  if (currElement === null || preventElems.includes(document.elementFromPoint(e.clientX, e.clientY) as HTMLElement)) {
    console.log("rightClick: current Element is null.");
  } else {
    changeModeTo("none");
    console.log(`rightClick: current Element is :`, currElement);
    console.log(`rightClick: current option is :`, option);
    applyResize(option);
    currElement.classList.remove("_extension_resizer_mouseOver");
  }
}