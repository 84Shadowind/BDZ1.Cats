addBtn.addEventListener("click", e => {
  mdBox.style.display = "flex";
});

mdClose.addEventListener("click", e => {
  mdBox.style.display = "none";
});

addForm.addEventListener("submit", e => {
  e.preventDefault()
  const body = {}
  console.log(addForm.children)
  console.log(addForm.elements)

  for (let i = 0; i< addForm.elements.length; i++) {
    const inp = addForm.elements[i]
    console.log(inp)
    console.log(inp.name)
    console.log(inp.value)
    if (inp.name) {
      if (inp.type === "checkbox") {
          body[inp.name] = inp.checked;
      } else {
        body[inp.name] = inp.value;
      }
    }
  }
  console.log(body)
})