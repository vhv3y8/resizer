chrome.runtime.onInstalled.addListener(()=>{let e={fontSize:3,sizeLimit:19,fontFamily:"None"};chrome.storage.sync.set({prevOption:e})});chrome.runtime.onMessage.addListener((e,n)=>{console.dir({sender:n,msg:e})});
