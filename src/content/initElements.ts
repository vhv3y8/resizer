import { changeModeTo } from "./changeMode";
import { optionModeBox, optionModeStyle, selectModeBox, selectModeStyle } from "./elementRaw";
import "./initFonts";
import { applyResize, Option } from "./optionMode";
import { currElement } from "./selectMode";
import { option, setOption } from "./storage";

export let preventElems: Element[] = [];

export const selectModeShadow = document.createElement("div");
export const selectModeShadowRoot = selectModeShadow.attachShadow({ mode: "open" });
selectModeShadowRoot.append(selectModeBox, selectModeStyle);

export const optionModeShadow = document.createElement("div");
export let optionModeShadowRoot = optionModeShadow.attachShadow({ mode: "open" });
optionModeShadowRoot.append(optionModeBox, optionModeStyle);

console.log(`from initElements.ts: optionModeShadowRoot.querySelector("_extension_resizer_inputSize"):`);
console.log(optionModeShadowRoot.querySelector("#_extension_resizer_inputSize"));
console.log(optionModeShadow.shadowRoot?.querySelector("#_extension_resizer_inputSize"));

// scripts for option mode elements
export const optionModeElems = {
  inputSize: optionModeShadowRoot.querySelector("#_extension_resizer_inputSize") as HTMLInputElement,
  inputSizeLimit: optionModeShadowRoot.querySelector("#_extension_resizer_inputSizeLimit") as HTMLInputElement,
  inputFamily: optionModeShadowRoot.querySelector("#_extension_resizer_inputFamily") as HTMLInputElement
} as { [name: string]: HTMLInputElement };
export const selectModeElems = {
  size: selectModeShadowRoot.querySelector("#_extension_resizer_size"),
  limit: selectModeShadowRoot.querySelector("#_extension_resizer_sizeLimit"),
  family: selectModeShadowRoot.querySelector("#_extension_resizer_family")
} as { [name: string]: HTMLElement };

let inputTexts = [optionModeElems.inputSize, optionModeElems.inputSizeLimit];
console.log([optionModeElems.inputSize, optionModeElems.inputSizeLimit, optionModeElems.inputFamily]);
console.log(inputTexts);
inputTexts.forEach((elem: HTMLInputElement) => {
  elem.addEventListener("mousedown", (e) => {
    elem.select();
    console.log("mousedown");
  })
  elem.addEventListener("mouseup", (e) => {
    // elem.select();
    // console.log("mouseup");
    e.preventDefault();
  })
});
// elem.addEventListener("input", (e) => {
//   // validation
//   let validCharacters = "0123456789+-".split("");
//   if (!validCharacters.includes(elem.value[elem.value.length - 1])) {
//     elem.value = elem.value.split("").slice(0, -1).join("");
//   }
// })
// TODO : value for optionModeElems.inputFamily
let optionInputSizeValue = optionModeElems.inputSize.value;
optionModeElems.inputSize.addEventListener("input", (e) => {
  console.log("from input input event: ", optionModeElems.inputSize.value);
  let regex = /^-?\d*\.?\d*$/;
  if (!optionModeElems.inputSize.value.match(regex)) {
    optionModeElems.inputSize.value = optionInputSizeValue;
  } else {
    optionInputSizeValue = optionModeElems.inputSize.value;
  }
});

document.addEventListener("keydown", (e) => {
  let currActive = optionModeShadowRoot.activeElement;
  console.log(e.key);
  console.log(currActive);
  if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
    e.preventDefault();
    if (currActive === optionModeElems.inputSize) {
      (currActive as HTMLInputElement).value = +(currActive as HTMLInputElement).value - 1 + "";
      buttonPlusMinus.textContent = (+(currActive as HTMLInputElement).value < 0) ? "-" : "+";
    } else if (currActive === optionModeElems.inputSizeLimit) {
      (currActive as HTMLInputElement).value = +(currActive as HTMLInputElement).value - 1 + "";
    }

    if (currActive instanceof HTMLInputElement) {
      currActive.select();
    }
  } else if (e.key === "ArrowUp" || e.key === "ArrowRight") {
    e.preventDefault();
    if (currActive === optionModeElems.inputSize) {
      (currActive as HTMLInputElement).value = +(currActive as HTMLInputElement).value + 1 + "";
      buttonPlusMinus.textContent = (+(currActive as HTMLInputElement).value < 0) ? "-" : "+";
    } else if (currActive === optionModeElems.inputSizeLimit) {
      (currActive as HTMLInputElement).value = +(currActive as HTMLInputElement).value + 1 + "";
    }

    if (currActive instanceof HTMLInputElement) {
      currActive.select();
    }
  }

  if (e.key === "Enter") {
    applyButton.click();
  }
});

const buttonPlusMinus = optionModeShadowRoot.querySelector("#_extension_resizer_buttonPlusMinus") as HTMLButtonElement;
buttonPlusMinus.addEventListener("click", () => {
  optionModeElems.inputSize.value = +optionModeElems.inputSize.value * -1 + "";
  buttonPlusMinus.textContent = (buttonPlusMinus.textContent === "+") ? "-" : "+";
});

let applyButton = optionModeShadowRoot.querySelector("#apply") as HTMLButtonElement;
applyButton.addEventListener("click", () => {
  let currOption = {
    fontFamily: (optionModeElems.inputFamily.value === "없음") ? "None" : optionModeElems.inputFamily.value,
    sizeLimit: +optionModeElems.inputSizeLimit.value,
    fontSize: +optionModeElems.inputSize.value
  };
  applyResize(currOption);
  changeModeTo("none");
  setOption(currOption);
  console.log(`option is :`, currOption);
});

// set image srcs
let [img1, img2, img3, img4, img5]: HTMLImageElement[] = [
  selectModeShadowRoot.querySelector("#_extension_resizer_img1") as HTMLImageElement,
  selectModeShadowRoot.querySelector("#_extension_resizer_img2") as HTMLImageElement,
  selectModeShadowRoot.querySelector("#_extension_resizer_img3") as HTMLImageElement,
  selectModeShadowRoot.querySelector("#_extension_resizer_img4") as HTMLImageElement,
  optionModeShadowRoot.querySelector("#_extension_resizer_img5") as HTMLImageElement
];
let imgToSrc: [HTMLImageElement, string][] = [
  [img1, "assets/resizerIconTransparent.png"],
  [img2, "assets/escBig.png"],
  [img3, "assets/leftMouse.png"],
  [img4, "assets/rightMouse.png"],
  [img5, "assets/resizerIconTransparent.png"]
];
imgToSrc.forEach(([img, src]) => {
  img.src = chrome.runtime.getURL(src);
})
preventElems.push(selectModeBox);
preventElems.push(...selectModeBox.querySelectorAll("*"));

export function applyOptionUI(option: Option) {
  console.log(option);
  optionModeElems.inputSize.value = option.fontSize + "";
  optionModeElems.inputSizeLimit.value = option.sizeLimit + "";
  console.log(`from applyOptionUI: `, optionModeElems.inputSize.value, optionModeElems.inputSizeLimit.value);
  console.log(option);

  // Set Select Mode UI.
  selectModeElems.size.classList.remove("._extension_resizer_none");
  selectModeElems.limit.classList.remove("._extension_resizer_none");
  selectModeElems.family.classList.remove("._extension_resizer_none");

  selectModeElems.size.textContent = "font-size: ";
  if (option.fontSize === 0) {
    selectModeElems.size.textContent += "0";
  } else if (option.fontSize < 0) {
    selectModeElems.size.textContent += option.fontSize;
  } else {
    selectModeElems.size.textContent += "+" + option.fontSize;
  }
  selectModeElems.size.textContent += "px;";

  if (option.sizeLimit === "None") {
    console.log("sizeLimit is None.");
    selectModeElems.limit.classList.add("._extension_resizer_none");
  } else {
    selectModeElems.limit.textContent = `font-size limit: ${option.sizeLimit}px`;
  }

  if (option.fontFamily === "None") {
    console.log("fontFamily is None.");
    selectModeElems.family.classList.add("._extension_resizer_none");
  } else {
    selectModeElems.family.textContent = `font-family: ${option.fontFamily}`;
  }
}



