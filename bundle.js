function k(e){return new DOMParser().parseFromString(e,"text/html").body.firstChild}let v=k(`<div id="_extension_resizer_selectBox">
<h3>
  <img 
    id="_extension_resizer_img1"
    src="" alt="" width="22" height="22" color="red"
  >
  resizer
</h3>
<p>
  <img 
    id="_extension_resizer_img2"
    src="" width="24" height="24" alt=""
  >
  ESC 키를 눌러 종료
</p>
<p>
  <img 
    id="_extension_resizer_img3"
    src="" width="24" height="24" alt=""
  >
  추가 선택 및 설정
</p>
<p>
  <img 
    id="_extension_resizer_img4"
    src="" width="24" height="24" alt=""
  >
  즉시 적용
</p>
<div id="_extension_resizer_infoBox">
  <p id="_extension_resizer_size"></p>
  <p id="_extension_resizer_sizeLimit"></p>
  <p id="_extension_resizer_family"></p>
</div>
</div>`);const b=document.createElement("style");b.textContent=`#_extension_resizer_selectBox {
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
}

h3 {
  color: #585858;
  font-family: Lobster, sans-serif;
  font-size: 19px;
  margin: 0 0 8px;
  font-weight: 700;

  display: flex;
  align-items: center;
}

p {
  margin: .4em 0;

  display: flex;
  align-items: center;
  font-size: 1em;
}

img {
  margin-right: 8px;
}

#_extension_resizer_infoBox {
  padding: .4em .6em;
  margin: 0;
  background-color: #ccc;
}

#_extension_resizer_infoBox p {
  font-size: 1.1em;
  margin: 0;
  font-family: Inconsolata, monospace;
  line-height: 1.4;
}`;const B=k(`<div id="options">
<h3>
  <img 
    id="_extension_resizer_img5"
    style="
      margin-right: 8px;
    "
    src="" alt="" width="22" height="22" color="red"
  >
  resizer
</h3>
  <ul>
    <li>
      <h4
        style="margin-bottom: .5em;"
      >
        font-size
      </h4>
      <p 
        style="
          // grid-template-columns: fit-content(1ch) 1fr fit-content(2ch);
        "
      >
        <button
          id="_extension_resizer_buttonPlusMinus"
        >+</button>
        <input 
          class="_extension_resizer_input"
          type="text" name="" 
          id="_extension_resizer_inputSize"
          style="
            width: 9em;
          "
        >
        <span>px</span>
      </p>
    </li>
    <li>
      <h4
        style="margin-bottom: .5em;"
      >
        font-size limit
      </h4>
      <p 
        style="
          // grid-template-columns: auto min-content;
          // width: 9em;
        "
      >
        <input 
          type="text" name="" 
          id="_extension_resizer_inputSizeLimit"
          class="_extension_resizer_input"
        >
        <span>px</span>
      </p>
    </li>
    <li>
      <h4
        style="margin-bottom: .5em;"
      >
        font-family
      </h4>
      <p
        style="
          display: grid;
        "
      >
        <select name="" 
          id="_extension_resizer_inputFamily"
        >
          <option value="없음">없음</option>
        </select>
      </p>
    </li>
  </ul>
  <hr>
  <button 
    id="apply"
    style="
      flex: 1;  
      background-color: #E284FF;
      /* background-color: #DA62FF; */
      border: none;
      border-radius: 5px;
      padding: 3px;
    "
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="28" height="28"><title>Color Wand</title><rect fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" x="280.48" y="122.9" width="63.03" height="378.2" rx="31.52" transform="rotate(-45 312.002 311.994)"/><path d="M178.38 178.38a31.64 31.64 0 000 44.75L223.25 268 268 223.25l-44.87-44.87a31.64 31.64 0 00-44.75 0z"/><path stroke="currentColor" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" d="M48 192h48M90.18 90.18l33.94 33.94M192 48v48M293.82 90.18l-33.94 33.94M124.12 259.88l-33.94 33.94"/></svg>
  </button>
</div>`);let M=document.createElement("style");M.textContent=`* {
  margin: 0;
}

#options {
  display: flex;
  flex-direction: column;
  width: 180px;
  font-family: Lato, sans-serif;
  background-color: #ddd;
  border: 3px solid gray;
  border-radius: 1rem;
  padding: .75em .75em 1em;
  position: fixed;
  top: 1em;
  left: 1em;
  z-index: 9999;
  line-height: 1.3;
}

#options h3 {
  color: #585858;
  font-family: Lobster, sans-serif;
  font-size: 19px;
  margin: 0 0 8px;
  font-weight: 700;

  display: flex;
  align-items: center;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: .6em;
}

ul li p {
  // display: grid;
  display: flex;
  gap: 5px;
  font-size: 17px;
  margin-bottom: 5px;
  font-family: 'Lato', sans-serif;
}

hr {
  width: 100%;
  height: 1px;
  background-color: gray;
  border: none;
  margin-bottom: .5rem;
}

input[type=text] {
  border: none;
  outline: none;
  padding: .3em;
  text-align: right;
  font-size: 14px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  color: #222;
}

#_extension_resizer_buttonPlusMinus {
  border: none;
  outline: none;
  font-size: 20px;
  width: 1.25em;
  height: 1.25em;
  background: #999;
  color: #eee;
}

input:focus {
  background-color: #666;
  color: #eee;
}

input::selection {
  background-color: #eee;
  color: #222;
}

#apply:hover {
  background-color: #e696ff !important;
}

#apply:active {
  background-color: #db66ff !important;
}`;let C=document.createElement("style");document.head.append(C);C.appendChild(document.createTextNode(`
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
`));let l;(async()=>(l=(await chrome.storage.sync.get("prevOption")).prevOption,console.log("from storage.ts: ",l),h(l)))();function F(e){e!==void 0&&(l=e),chrome.storage.sync.set({prevOption:l})}let n=null,r=document.createElement("div");const A={mousemove:I,click:R,contextmenu:T};function I(e){r=document.elementFromPoint(e.clientX,e.clientY),n!==null&&r!==n&&(n.classList.remove("_extension_resizer_mouseOver"),console.log("mousemove: element changed.")),g.includes(r)&&r!==n&&(n=null,console.log("mousemove: mouse is on inserted Element.")),r!==n&&(console.log("currElement: ",n),console.log("detectedElement: ",r)),r!==null&&r!==n&&!g.includes(r)&&(n=r,n.classList.add("_extension_resizer_mouseOver"),console.log("mousemove: changing current element."))}function R(e){L==="select"&&(n===null||g.includes(document.elementFromPoint(e.clientX,e.clientY))?console.log("leftClick: current Element is null."):(d("option"),console.log("leftClick: currElement is",n)))}function T(e){e.preventDefault(),n===null||g.includes(document.elementFromPoint(e.clientX,e.clientY))?console.log("rightClick: current Element is null."):(d("none"),console.log("rightClick: current Element is :",n),console.log("rightClick: current option is :",l),q(l),n.classList.remove("_extension_resizer_mouseOver"))}function q(e){if(n===null)console.log("currElement is null. cannot run applySize.");else{let t=Array.from(n.querySelectorAll("*"));t.push(n),t.forEach(o=>{let p=+getComputedStyle(o).fontSize.slice(0,-2);console.log(`prevFontSize is : ${p}`),(e.sizeLimit==="None"||0<=e.fontSize&&p<e.sizeLimit||e.fontSize<0&&e.sizeLimit<p)&&(0<=e.fontSize?p+e.fontSize<e.sizeLimit?o.style.setProperty("font-size",`${p+e.fontSize}px`,"important"):o.style.setProperty("font-size",`${e.sizeLimit}px`,"important"):e.sizeLimit<p+e.fontSize?o.style.setProperty("font-size",`${p+e.fontSize}px`,"important"):o.style.setProperty("font-size",`${e.sizeLimit}px`,"important")),e.fontFamily!=="None"&&(o.style.setProperty("font-family",e.fontFamily),console.log("apply font-family."))})}}let g=[];const O=document.createElement("div"),u=O.attachShadow({mode:"open"});u.append(v,b);const S=document.createElement("div");let m=S.attachShadow({mode:"open"});m.append(B,M);console.log('from initElements.ts: optionModeShadowRoot.querySelector("_extension_resizer_inputSize"):');console.log(m.querySelector("#_extension_resizer_inputSize"));var w;console.log((w=S.shadowRoot)==null?void 0:w.querySelector("#_extension_resizer_inputSize"));const i={inputSize:m.querySelector("#_extension_resizer_inputSize"),inputSizeLimit:m.querySelector("#_extension_resizer_inputSizeLimit"),inputFamily:m.querySelector("#_extension_resizer_inputFamily")},s={size:u.querySelector("#_extension_resizer_size"),limit:u.querySelector("#_extension_resizer_sizeLimit"),family:u.querySelector("#_extension_resizer_family")};let P=[i.inputSize,i.inputSizeLimit];console.log([i.inputSize,i.inputSizeLimit,i.inputFamily]);console.log(P);P.forEach(e=>{e.addEventListener("mousedown",t=>{e.select(),console.log("mousedown")}),e.addEventListener("mouseup",t=>{t.preventDefault()})});let E=i.inputSize.value;i.inputSize.addEventListener("input",e=>{console.log("from input input event: ",i.inputSize.value);let t=/^-?\d*\.?\d*$/;i.inputSize.value.match(t)?E=i.inputSize.value:i.inputSize.value=E});document.addEventListener("keydown",e=>{let t=m.activeElement;console.log(e.key),console.log(t),e.key==="ArrowDown"||e.key==="ArrowLeft"?(e.preventDefault(),t===i.inputSize?(t.value=+t.value-1+"",_.textContent=+t.value<0?"-":"+"):t===i.inputSizeLimit&&(t.value=+t.value-1+""),t instanceof HTMLInputElement&&t.select()):(e.key==="ArrowUp"||e.key==="ArrowRight")&&(e.preventDefault(),t===i.inputSize?(t.value=+t.value+1+"",_.textContent=+t.value<0?"-":"+"):t===i.inputSizeLimit&&(t.value=+t.value+1+""),t instanceof HTMLInputElement&&t.select()),e.key==="Enter"&&N.click()});const _=m.querySelector("#_extension_resizer_buttonPlusMinus");_.addEventListener("click",()=>{i.inputSize.value=+i.inputSize.value*-1+"",_.textContent=_.textContent==="+"?"-":"+"});let N=m.querySelector("#apply");N.addEventListener("click",()=>{let e={fontFamily:i.inputFamily.value==="없음"?"None":i.inputFamily.value,sizeLimit:+i.inputSizeLimit.value,fontSize:+i.inputSize.value};q(e),d("none"),F(e),console.log("option is :",e)});let[$,D,U,H,X]=[u.querySelector("#_extension_resizer_img1"),u.querySelector("#_extension_resizer_img2"),u.querySelector("#_extension_resizer_img3"),u.querySelector("#_extension_resizer_img4"),m.querySelector("#_extension_resizer_img5")],Y=[[$,"assets/resizerIconTransparent.png"],[D,"assets/escBig.png"],[U,"assets/leftMouse.png"],[H,"assets/rightMouse.png"],[X,"assets/resizerIconTransparent.png"]];Y.forEach(([e,t])=>{e.src=chrome.runtime.getURL(t)});g.push(v);g.push(...v.querySelectorAll("*"));function h(e){console.log(e),i.inputSize.value=e.fontSize+"",i.inputSizeLimit.value=e.sizeLimit+"",console.log("from applyOptionUI: ",i.inputSize.value,i.inputSizeLimit.value),console.log(e),s.size.classList.remove("._extension_resizer_none"),s.limit.classList.remove("._extension_resizer_none"),s.family.classList.remove("._extension_resizer_none"),s.size.textContent="font-size: ",e.fontSize===0?s.size.textContent+="0":e.fontSize<0?s.size.textContent+=e.fontSize:s.size.textContent+="+"+e.fontSize,s.size.textContent+="px;",e.sizeLimit==="None"?(console.log("sizeLimit is None."),s.limit.classList.add("._extension_resizer_none")):s.limit.textContent=`font-size limit: ${e.sizeLimit}px`,e.fontFamily==="None"?(console.log("fontFamily is None."),s.family.classList.add("._extension_resizer_none")):s.family.textContent=`font-family: ${e.fontFamily}`}let L="none",a={none:{},select:A,option:{}};const c={none:[],select:[O],option:[S]};let G={none:[()=>{n!==null&&n.classList.remove("_extension_resizer_mouseOver")}],select:[],option:[()=>{i.inputSize.value=l.fontSize+"",i.inputSizeLimit.value=l.sizeLimit+"",i.inputSize.select()}]};function d(e){L=e,e==="option"?(y(a.option),f(a.none),f(a.select),x(c.option),z(c.none),z(c.select),h(l),G.option.forEach(t=>{t()}),document.documentElement.classList.remove("_extension_resizer_rootFilter")):e==="select"?(y(a.select),f(a.option),f(a.none),x(c.select),z(c.none),z(c.option),h(l),document.documentElement.classList.add("_extension_resizer_rootFilter")):(y(a.none),f(a.option),f(a.select),x(c.none),z(c.select),z(c.option),document.documentElement.classList.remove("_extension_resizer_rootFilter"),n!==null&&n.classList.remove("_extension_resizer_mouseOver"))}function f(e){console.log("removeEvents:",e),Object.keys(e).forEach(o=>{document.removeEventListener(o,e[o])})}function y(e){console.log("addEvents:",e),Object.keys(e).forEach(o=>{document.addEventListener(o,e[o])})}function x(e){e.forEach(t=>{t.classList.remove("_extension_resizer_none")})}function z(e){e.forEach(t=>{t.classList.add("_extension_resizer_none")})}chrome.runtime.onMessage.addListener(e=>{console.log(e),e.mode==="toggle"&&d(L==="none"?"select":"none")});Object.values(c).flat(1).forEach(e=>{e.classList.add("_extension_resizer_none"),document.body.append(e)});document.addEventListener("keydown",e=>{if(e.ctrlKey&&(e.key==="Q"||e.key==="q")&&(console.log("Ctrl+Q Pressed."),d("select")),e.key==="Escape"){d("none");let t={fontFamily:i.inputFamily.value==="없음"?"None":i.inputFamily.value,sizeLimit:+i.inputSizeLimit.value,fontSize:+i.inputSize.value};F(t)}});
