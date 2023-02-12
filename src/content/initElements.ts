import "./initFonts";

export let preventElems: Element[] = [];

export let selectModeBox = parseHtmlString(`<div
id="selectBox"
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
    id="img1"
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
    id="img2"
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
    id="img3"
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
    id="img4"
    style="
      margin-right: 8px;
    "
    src="" width="24" height="24" alt=""
  >
  즉시 적용
</p>
<p
  style="
    padding-left: .8em;
    font-size: 1em;
    margin: 0;
  "
>- font-size: +2px;</p>
<p
  style="
    padding-left: .8em;
    font-size: 1em;
    margin: 0;
  "
>- font size limit: 17px;</p>
</div>`);
let imgToSrc: [HTMLImageElement, string][] = [
  [selectModeBox.querySelector("#img1") as HTMLImageElement, "assets/resizerIconTransparent.png"],
  [selectModeBox.querySelector("#img2") as HTMLImageElement, "assets/escBig.png"],
  [selectModeBox.querySelector("#img3") as HTMLImageElement, "assets/leftMouse.png"],
  [selectModeBox.querySelector("#img4") as HTMLImageElement, "assets/rightMouse.png"]
];
imgToSrc.forEach(([img, src]) => {
  img.src = chrome.runtime.getURL(src);
})
preventElems.push(selectModeBox);
preventElems.push(...selectModeBox.querySelectorAll("*"));

function parseHtmlString(htmlString: string): HTMLElement {
  let parser = new DOMParser();
  return parser.parseFromString(htmlString, "text/html").body.firstChild as HTMLElement;
}