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

chrome.action.onClicked.addListener(() => {
  console.log("popup clicked.");
  chrome.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    chrome.tabs.sendMessage(tabs[0].id as number, { mode: "toggle" });
  })
});

chrome.runtime.onMessage.addListener((msg, sender) => {
  // console.log(`${sender}: ${msg}`);
  console.dir({ sender, msg });
})