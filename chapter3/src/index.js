const onClickAdd = () => {
  const textEl = document.getElementById("add-text")
  const inputText = textEl.value;
  textEl.value = "";

  const li = document.createElement("li");
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = inputText;

  const button = document.createElement("button");
  button.textContent = "削除";

  console.log(button.text)

  button.addEventListener("click", () => {
    const deleteTarget = button.closest("li");
    document.getElementById("memo-list").removeChild(deleteTarget);
  });

  div.appendChild(p);
  div.appendChild(button);
  li.appendChild(div);

  console.log(li)

  document.getElementById("memo-list").appendChild(li)
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd())
