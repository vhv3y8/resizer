import "./initFonts";
import { Option } from "./optionMode";

export let preventElems: Element[] = [];

export let selectModeBox = parseHtmlString(`<div
id="_extension_resizer_selectBox"
style="
  border-radius: 1rem;
  background-color: #f2f2f2;
  border: 3px solid gray;
  padding: .75em 1.25em 1.5em 1.2em;
  font-family: Nanum Gothic, sans-serif;
  font-weight: 800;
  font-size: 13px;
  font-synthesis: weight;
  color: #222;
  display: inline-block;
  position: fixed;
  top: 1em;
  left: 1em;
  z-index: 9999;
"
>
<h3
  style="
    color: #585858;
    font-family: Lobster, sans-serif;
    font-size: 19px;
    margin: 0 0 8px;
    font-weight: 700;

    display: flex;
    align-items: center;
  "
>
  <img 
    id="_extension_resizer_img1"
    style="
      margin-right: 8px;
    "
    src="" alt="" width="22" height="22" color="red"
  >
  resizer
</h3>
<p
  style="
    margin: .4em 0;

    display: flex;
    align-items: center;
    font-size: 1em;
  "
>
  <img 
    id="_extension_resizer_img2"
    style="
      margin-right: 8px;
    "
    src="" width="24" height="24" alt=""
  >
  ESC 키를 눌러 종료
</p>
<p
  style="
    margin: .4em 0;

    display: flex;
    align-items: center;
    font-size: 1em;
  "
>
  <img 
    id="_extension_resizer_img3"
    style="
      margin-right: 8px;
    "
    src="" width="24" height="24" alt=""
  >
  추가 선택 및 설정
</p>
<p
  style="
    margin: .4em 0;

    display: flex;
    align-items: center;
    font-size: 1em;
  "
>
  <img 
    id="_extension_resizer_img4"
    style="
      margin-right: 8px;
    "
    src="" width="24" height="24" alt=""
  >
  즉시 적용
</p>
<p
  id="_extension_resizer_size"
  style="
    padding-left: .8em;
    font-size: 1.1em;
    margin: 0;
    font-family: Inconsolata, monospace;
    line-height: 1.4;
    background-color: #ccc;
  "
></p>
<p
  id="_extension_resizer_sizeLimit"
  style="
    padding-left: .8em;
    font-size: 1.1em;
    margin: 0;
    font-family: Inconsolata;
    line-height: 1.4;
    background-color: #ccc;
  "
></p>
<p
  id="_extension_resizer_family"
  style="
    padding-left: .8em;
    font-size: 1.1em;
    margin: 0;
    font-family: Inconsolata, monospace;
    line-height: 1.4;
    background-color: #ccc;
  "
></p>
</div>`);
let [img1, img2, img3, img4]: HTMLImageElement[] = [
  selectModeBox.querySelector("#_extension_resizer_img1") as HTMLImageElement,
  selectModeBox.querySelector("#_extension_resizer_img2") as HTMLImageElement,
  selectModeBox.querySelector("#_extension_resizer_img3") as HTMLImageElement,
  selectModeBox.querySelector("#_extension_resizer_img4") as HTMLImageElement
];
let imgToSrc: [HTMLImageElement, string][] = [
  [img1, "assets/resizerIconTransparent.png"],
  [img2, "assets/escBig.png"],
  [img3, "assets/leftMouse.png"],
  [img4, "assets/rightMouse.png"]
];

export function applyOptionText(option: Option) {
  let size = document.getElementById("_extension_resizer_size") as HTMLElement;
  let limit = document.getElementById("_extension_resizer_sizeLimit") as HTMLElement;
  let family = document.getElementById("_extension_resizer_family") as HTMLElement;

  size.classList.remove("._extension_resizer_none");
  limit.classList.remove("._extension_resizer_none");
  family.classList.remove("._extension_resizer_none");

  size.textContent = "font-size: ";
  if (option.fontSize === 0) {
    size.textContent += "0";
  } else if (option.fontSize < 0) {
    size.textContent += option.fontSize;
  } else {
    size.textContent += "+" + option.fontSize;
  }
  size.textContent += "px;";

  if (option.sizeLimit === "None") {
    console.log("sizeLimit is None.");
    limit.classList.add("._extension_resizer_none");
  } else {
    limit.textContent = `font-size limit: ${option.sizeLimit}px`;
  }

  if (option.fontFamily === "None") {
    console.log("fontFamily is None.");
    family.classList.add("._extension_resizer_none");
  } else {
    family.textContent = `font-family: ${option.fontFamily}`;
  }
}
imgToSrc.forEach(([img, src]) => {
  img.src = chrome.runtime.getURL(src);
})
preventElems.push(selectModeBox);
preventElems.push(...selectModeBox.querySelectorAll("*"));



function parseHtmlString(htmlString: string): HTMLElement {
  let parser = new DOMParser();
  return parser.parseFromString(htmlString, "text/html").body.firstChild as HTMLElement;
}