import { applyOptionUI, optionModeElems, optionModeShadow, selectModeShadow } from "./initElements";
import { selectMouseMove, selectModeEvents, currElement } from "./selectMode";
import { option, setOption } from "./storage";

export type mode = "none" | "select" | "option";
export let currMode: mode = "none";

let events = {
  none: {},
  select: selectModeEvents,
  option: {}
}
export const elements: { [m in mode]: HTMLElement[] } = {
  none: [],
  select: [selectModeShadow],
  option: [optionModeShadow]
}
let additionalFunctions: { [m in mode]: Function[] } = {
  none: [() => {
    if (currElement !== null) {
      currElement.classList.remove("_extension_resizer_mouseOver");
    }
  }],
  select: [],
  option: [() => {
    // needs to run after element is existing?
    // set dafault values
    optionModeElems.inputSize.value = option.fontSize + "";
    optionModeElems.inputSizeLimit.value = option.sizeLimit + "";
    optionModeElems.inputSize.select();
  }]
}

/**
 *  changes UI and add/remove Events that corresponds to mode.
 * @param mode
 */
export function changeModeTo(mode: mode) {
  currMode = mode;

  if (mode === "option") {
    // events
    addEvents(events.option);
    removeEvents(events.none);
    removeEvents(events.select);

    // elements
    showElements(elements.option);
    hideElements(elements.none);
    hideElements(elements.select);

    applyOptionUI(option);

    additionalFunctions.option.forEach(func => {
      func();
    });

    document.documentElement.classList.remove("_extension_resizer_rootFilter");
  } else if (mode === "select") {
    // events
    addEvents(events.select);
    removeEvents(events.option);
    removeEvents(events.none);

    // elements
    showElements(elements.select);
    hideElements(elements.none);
    hideElements(elements.option);

    applyOptionUI(option);

    document.documentElement.classList.add("_extension_resizer_rootFilter");
  } else { // mode === "none"
    // events
    addEvents(events.none);
    removeEvents(events.option);
    removeEvents(events.select);

    // elements
    showElements(elements.none);
    hideElements(elements.select);
    hideElements(elements.option);

    document.documentElement.classList.remove("_extension_resizer_rootFilter");

    if (currElement !== null) {
      currElement.classList.remove("_extension_resizer_mouseOver");
    }
  }
}

function removeEvents(obj) {
  console.log(`removeEvents:`, obj);
  let keys = Object.keys(obj);
  keys.forEach(key => {
    document.removeEventListener(key, obj[key]);
  })
}

function addEvents(obj) {
  console.log(`addEvents:`, obj);
  let keys = Object.keys(obj);
  keys.forEach(key => {
    document.addEventListener(key, obj[key]);
  })
}

/**
 * remove display: none;
 */
function showElements(elems: HTMLElement[]) {
  elems.forEach(elem => {
    elem.classList.remove("_extension_resizer_none");
  })
}

/**
 * add display: none
 */
function hideElements(elems: HTMLElement[]) {
  elems.forEach(elem => {
    elem.classList.add("_extension_resizer_none");
  })
}