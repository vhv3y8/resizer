import { applyOptionText } from "./initElements";
import { Option } from "./optionMode";

export let option: Option;

(async () => {
  let db = await chrome.storage.sync.get("prevOption");
  option = db.prevOption as Option;
  console.log("from storage.ts: ", option);
  // set things
  applyOptionText(option);
})();

export function setOption(option?: Option): void {
  chrome.storage.sync.set({
    prevOption: option
  })
}
