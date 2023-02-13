let y=document.createElement("style");document.head.append(y);y.appendChild(document.createTextNode(`
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
`));let f=[],c=k(`<div
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
</div>`),[x,h,v,E]=[c.querySelector("#_extension_resizer_img1"),c.querySelector("#_extension_resizer_img2"),c.querySelector("#_extension_resizer_img3"),c.querySelector("#_extension_resizer_img4")],L=[[x,"assets/resizerIconTransparent.png"],[h,"assets/escBig.png"],[v,"assets/leftMouse.png"],[E,"assets/rightMouse.png"]];function S(e){let n=document.getElementById("_extension_resizer_size"),i=document.getElementById("_extension_resizer_sizeLimit"),s=document.getElementById("_extension_resizer_family");n.classList.remove("._extension_resizer_none"),i.classList.remove("._extension_resizer_none"),s.classList.remove("._extension_resizer_none"),n.textContent="font-size: ",e.fontSize===0?n.textContent+="0":e.fontSize<0?n.textContent+=e.fontSize:n.textContent+="+"+e.fontSize,n.textContent+="px;",e.sizeLimit==="None"?(console.log("sizeLimit is None."),i.classList.add("._extension_resizer_none")):i.textContent=`font-size limit: ${e.sizeLimit}px`,e.fontFamily==="None"?(console.log("fontFamily is None."),s.classList.add("._extension_resizer_none")):s.textContent=`font-family: ${e.fontFamily}`}L.forEach(([e,n])=>{e.src=chrome.runtime.getURL(n)});f.push(c);f.push(...c.querySelectorAll("*"));function k(e){return new DOMParser().parseFromString(e,"text/html").body.firstChild}function z(e){if(t===null)console.log("currElement is null. cannot run applySize.");else{let n=Array.from(t.querySelectorAll("*"));n.push(t),n.forEach(i=>{let s=+getComputedStyle(i).fontSize.slice(0,-2);console.log(`prevFontSize is : ${s}`),(e.sizeLimit==="None"||0<=e.fontSize&&s<e.sizeLimit||e.fontSize<0&&e.sizeLimit<s)&&(0<=e.fontSize?s+e.fontSize<e.sizeLimit?i.style.setProperty("font-size",`${s+e.fontSize}px`,"important"):i.style.setProperty("font-size",`${e.sizeLimit}px`,"important"):e.sizeLimit<s+e.fontSize?i.style.setProperty("font-size",`${s+e.fontSize}px`,"important"):i.style.setProperty("font-size",`${e.sizeLimit}px`,"important")),e.fontFamily!=="None"&&(i.style.setProperty("font-family",e.fontFamily),console.log("apply font-family."))})}}let g;(async()=>(g=(await chrome.storage.sync.get("prevOption")).prevOption,console.log("from storage.ts: ",g),S(g)))();let t=null,o=document.createElement("div");const C={mousemove:F,click:w,contextmenu:b};function F(e){o=document.elementFromPoint(e.clientX,e.clientY),t!==null&&o!==t&&(t.classList.remove("_extension_resizer_mouseOver"),console.log("mousemove: element changed.")),f.includes(o)&&o!==t&&(t=null,console.log("mousemove: mouse is on inserted Element.")),o!==t&&(console.log("currElement: ",t),console.log("detectedElement: ",o)),o!==null&&o!==t&&!f.includes(o)&&(t=o,t.classList.add("_extension_resizer_mouseOver"),console.log("mousemove: changing current element."))}function w(e){_==="select"&&(t===null||f.includes(document.elementFromPoint(e.clientX,e.clientY))?console.log("leftClick: current Element is null."):(d("option"),console.log("leftClick: currElement is",t),z({fontFamily:"Inconsolata",fontSize:3,sizeLimit:19})))}function b(e){e.preventDefault(),t===null||f.includes(document.elementFromPoint(e.clientX,e.clientY))?console.log("rightClick: current Element is null."):(d("none"),console.log("rightClick: current Element is :",t),console.log("rightClick: current option is :",g),z(g),t.classList.remove("_extension_resizer_mouseOver"))}let _="none",r={none:{},select:C,option:{}};const l={none:[],select:[c],option:[]};function d(e){_=e,e==="option"?(u(r.option),m(r.none),m(r.select),p(l.option),a(l.none),a(l.select),document.documentElement.classList.remove("_extension_resizer_rootFilter")):e==="select"?(u(r.select),m(r.option),m(r.none),p(l.select),a(l.none),a(l.option),document.documentElement.classList.add("_extension_resizer_rootFilter")):(u(r.none),m(r.option),m(r.select),p(l.none),a(l.select),a(l.option),document.documentElement.classList.remove("_extension_resizer_rootFilter"),t!==null&&t.classList.remove("_extension_resizer_mouseOver"))}function m(e){console.log("removeEvents:",e),Object.keys(e).forEach(i=>{document.removeEventListener(i,e[i])})}function u(e){console.log("addEvents:",e),Object.keys(e).forEach(i=>{document.addEventListener(i,e[i])})}function p(e){e.forEach(n=>{n.classList.remove("_extension_resizer_none")})}function a(e){e.forEach(n=>{n.classList.add("_extension_resizer_none")})}chrome.runtime.onMessage.addListener(e=>{console.log(e),e.mode==="toggle"&&d(_==="none"?"select":"none")});Object.values(l).flat(1).forEach(e=>{e.classList.add("_extension_resizer_none"),document.body.append(e)});document.addEventListener("keydown",e=>{e.ctrlKey&&(e.key==="Q"||e.key==="q")&&(console.log("Ctrl+Q Pressed."),d("select")),e.key==="Escape"&&d("none")});
