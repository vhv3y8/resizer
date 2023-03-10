function parseHtmlString(htmlString: string): HTMLElement {
  let parser = new DOMParser();
  return parser.parseFromString(htmlString, "text/html").body.firstChild as HTMLElement;
}

export let selectModeBox = parseHtmlString(`<div id="_extension_resizer_selectBox">
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
</div>`);

export const selectModeStyle = document.createElement("style");
selectModeStyle.textContent = `#_extension_resizer_selectBox {
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
}`;

// Option Mode
export const optionModeBox = parseHtmlString(`<div id="options">
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
</div>`);
export let optionModeStyle = document.createElement("style");
optionModeStyle.textContent = `* {
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
}`;