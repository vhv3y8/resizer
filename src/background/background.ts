import { Option } from "../content/optionMode";

chrome.runtime.onInstalled.addListener(() => {
  let prevOption: Option = {
    fontSize: 0,
    fontFamily: "None",
    maxSizeLimit: "None"
  }
  chrome.storage.sync.set({
    prevOption
  })
});

chrome.runtime.onMessage.addListener((msg, sender) => {
  // console.log(`${sender}: ${msg}`);
  console.dir({ sender, msg });
})