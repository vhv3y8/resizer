let y=document.createElement("style");document.head.append(y);y.appendChild(document.createTextNode(`
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
`));let a=[],r=E(`<div
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
</div>`),x=[[r.querySelector("#img1"),"assets/resizerIconTransparent.png"],[r.querySelector("#img2"),"assets/escBig.png"],[r.querySelector("#img3"),"assets/leftMouse.png"],[r.querySelector("#img4"),"assets/rightMouse.png"]];x.forEach(([e,i])=>{e.src=chrome.runtime.getURL(i)});a.push(r);a.push(...r.querySelectorAll("*"));function E(e){return new DOMParser().parseFromString(e,"text/html").body.firstChild}function h(e){t===null?console.log("currElement is null. cannot run applySize."):t.querySelectorAll("*").forEach(l=>{let f=+getComputedStyle(l).fontSize.slice(0,-2);(e.maxSizeLimit==="None"||f<e.maxSizeLimit)&&l.style.setProperty("font-size",`${f+e.fontSize}px`,"important"),e.fontFamily!=="None"&&console.log("apply font-family.")})}let d;(async()=>(d=(await chrome.storage.sync.get("prevOption")).prevOption,console.log("from storage.ts: ",d)))();let t=null,n=document.createElement("div");const z={mousemove:_,click:L,contextmenu:S};function _(e){n=document.elementFromPoint(e.clientX,e.clientY),t!==null&&n!==t&&(t.classList.remove("_extension_resizer_mouseOver"),console.log("mousemove: element changed.")),a.includes(n)&&n!==t&&(t=null,console.log("mousemove: mouse is on inserted Element.")),n!==t&&(console.log("currElement: ",t),console.log("detectedElement: ",n)),n!==null&&n!==t&&!a.includes(n)&&(t=n,t.classList.add("_extension_resizer_mouseOver"),console.log("mousemove: changing current element."))}function L(e){v==="select"&&(t===null||a.includes(document.elementFromPoint(e.clientX,e.clientY))?console.log("leftClick: current Element is null."):(u("option"),console.log("leftClick: currElement is",t),h({fontFamily:"None",fontSize:3,maxSizeLimit:17})))}function S(e){e.preventDefault(),t===null||a.includes(document.elementFromPoint(e.clientX,e.clientY))?console.log("rightClick: current Element is null."):(u("none"),console.log("rightClick: current Element is :",t),console.log("rightClick: current option is :",d),h(d),t.classList.remove("_extension_resizer_mouseOver"))}let v="none",s={none:{},select:z,option:{}};const o={none:[],select:[r],option:[]};function u(e){v=e,e==="option"?(g(s.option),c(s.none),c(s.select),p(o.option),m(o.none),m(o.select),document.documentElement.classList.remove("_extension_resizer_rootFilter")):e==="select"?(g(s.select),c(s.option),c(s.none),p(o.select),m(o.none),m(o.option),document.documentElement.classList.add("_extension_resizer_rootFilter")):(g(s.none),c(s.option),c(s.select),p(o.none),m(o.select),m(o.option),document.documentElement.classList.remove("_extension_resizer_rootFilter"),t!==null&&t.classList.remove("_extension_resizer_mouseOver"))}function c(e){console.log("removeEvents:",e),Object.keys(e).forEach(l=>{document.removeEventListener(l,e[l])})}function g(e){console.log("addEvents:",e),Object.keys(e).forEach(l=>{document.addEventListener(l,e[l])})}function p(e){e.forEach(i=>{i.classList.remove("_extension_resizer_none")})}function m(e){e.forEach(i=>{i.classList.add("_extension_resizer_none")})}Object.values(o).flat(1).forEach(e=>{e.classList.add("_extension_resizer_none"),document.body.append(e)});document.addEventListener("keydown",e=>{e.ctrlKey&&(e.key==="Q"||e.key==="q")&&(console.log("Ctrl+Q Pressed."),u("select")),e.key==="Escape"&&u("none")});
