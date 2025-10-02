const charCount = () => {
  const text = document.querySelector("#textInput").value;
  document.querySelector(".charValue").innerHTML = text.length;
}