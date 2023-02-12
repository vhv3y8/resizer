import { changeModeTo, currMode } from "./changeMode";

chrome.runtime.onMessage.addListener((res) => {
  console.log(res);
  if (res.mode === "toggle") {
    if (currMode === "none") {
      changeModeTo("select");
    } else {
      changeModeTo("none");
    }
  }
});