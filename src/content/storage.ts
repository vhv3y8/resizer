import { applyOptionUI } from "./initElements";
import { Option } from "./optionMode";

export let option: Option;

(async () => {
  let db = await chrome.storage.sync.get("prevOption");
  option = db.prevOption as Option;
  console.log("from storage.ts: ", option);
  // set things
  applyOptionUI(option);
})();

export function setOption(givenOption?: Option): void {
  if (givenOption !== undefined) {
    option = givenOption;
  }
  chrome.storage.sync.set({
    prevOption: option
  });
}
