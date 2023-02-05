import { selectMouseMove } from "./selectMode";
import { insertedElements } from "./content";

export type mode = "none" | "select" | "option";
export let currMode: mode = "none";

export function changeModeTo(mode: mode) {
  currMode = mode;

  if (mode === "option") {
    // show or hide elements that is specific to mode.
    insertedElements.select.forEach((elem: HTMLElement) => {
      elem.classList.add("_extension_resizer_none");
    });
    insertedElements.option.forEach((elem: HTMLElement) => {
      elem.classList.remove("_extension_resizer_none");
    });

    // filter brightness to html tag only on select mode.
    document.documentElement.classList.remove("_extension_resizer_rootFilter");

    // add/remove mousemove event for select mode.
    document.removeEventListener("mousemove", selectMouseMove);
  } else if (mode === "select") {
    insertedElements.select.forEach((elem: HTMLElement) => {
      elem.classList.remove("_extension_resizer_none");
    });
    insertedElements.option.forEach((elem: HTMLElement) => {
      elem.classList.add("_extension_resizer_none");
    });

    document.documentElement.classList.add("_extension_resizer_rootFilter");

    document.addEventListener("mousemove", selectMouseMove);
  } else {
    insertedElements.select.forEach((elem: HTMLElement) => {
      elem.classList.add("_extension_resizer_none");
    });
    insertedElements.option.forEach((elem: HTMLElement) => {
      elem.classList.add("_extension_resizer_none");
    });

    document.documentElement.classList.remove("_extension_resizer_rootFilter");

    document.removeEventListener("mousemove", selectMouseMove);
  }
}