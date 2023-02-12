import "./changeMode";
import { mode, currMode, changeModeTo, elements } from "./changeMode";
import { option, setOption } from "./storage";

/**
 *  to run code that gets option from storage
 */
import "./storage";

Object.values(elements).flat(1).forEach(elem => {
  elem.classList.add("_extension_resizer_none");
  document.body.append(elem);
})

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && (e.key === "Q" || e.key === "q")) {
    console.log("Ctrl+Q Pressed.");
    changeModeTo("select");
  }
  if (e.key === "Escape") {
    changeModeTo("none");
  }
});


// //////////////////////////////////////

// console.log("hi from resizer!");
// console.log(currMode);

// // init show button
// let showBtn = document.createElement("button");
// showBtn.style.width = "1.5rem";
// showBtn.style.height = "1.5rem";
// // init ui box
// let uiBox = document.createElement("div");
// uiBox.style.width = "10rem";
// uiBox.style.height = "4rem";
// uiBox.style.border = "2px solid black";

// let lastSelection: Selection | null;
// // let lastElements = [];
// let lastAncestor: Node;
// let isSelecting = false;
// let lastRange: Range | null;
// document.addEventListener('selectionchange', () => {
//   isSelecting = true;
//   lastSelection = document.getSelection();
//   if (lastSelection !== null) {
//     lastRange = lastSelection.getRangeAt(0);
//     if (lastRange !== null) {
//       lastAncestor = lastRange.commonAncestorContainer;
//       console.log(lastSelection);
//       console.log(lastRange);
//       console.log(lastAncestor);
//     }
//   }
// });

// document.addEventListener("mouseup", (e) => {
//   if (isSelecting) {
//     let prevFontSize = getComputedStyle(lastAncestor as HTMLElement).fontSize;
//     console.log(`prevFontSize: ${prevFontSize}`);
//     console.log(+prevFontSize.slice(0, -2) + 5);
//     (lastAncestor as HTMLElement).style.fontSize = `${+prevFontSize.slice(0, -2) + 5}px`;
//     showButton(e.screenX, e.screenY);

//     // done
//     isSelecting = false;
//     lastSelection = null;
//   }
// });

// // function setLastElements() {
// //   // https://stackoverflow.com/a/46056649
// //   let _iterator = document.createNodeIterator(
// //     lastRange.commonAncestorContainer,
// //     NodeFilter.SHOW_ALL,
// //   );

// //   lastElements = [];
// //   while (_iterator.nextNode()) {
// //     if (lastElements.length === 0 && _iterator.referenceNode !== lastRange.startContainer) continue;
// //     lastElements.push(_iterator.referenceNode);
// //     if (_iterator.referenceNode === lastRange.endContainer) break;
// //   }
// //   console.log("lastElements:");
// //   console.log(lastElements);
// // }

// function showButton(mouseX, mouseY) {
//   console.log(`${mouseX}, ${mouseY}`);
// }