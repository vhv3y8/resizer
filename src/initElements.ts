export let selectModeBox = document.createElement("div");
selectModeBox.id = "selectModeBox";

let selectModeBoxStyle = {
  position: "fixed",
  left: "50%",
  top: "10px",
  transform: "translate(-50%, 0)",
  display: "inline-flex",
  padding: ".55em",
  backgroundColor: "#d9d9d9",
  border: "1px solid black",
  zIndex: "9999"
}
Object.keys(selectModeBoxStyle).forEach(style => {
  selectModeBox.style[style] = selectModeBoxStyle[style];
});

let span1 = document.createElement("span");
selectModeBox.append(span1);
span1.textContent = "변경할 텍스트가 모두 포함된 박스를 선택하세요.";

let btn1 = document.createElement("button");
selectModeBox.append(btn1);
btn1.textContent = "X";
