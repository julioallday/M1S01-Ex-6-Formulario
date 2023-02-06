var file_el = document.getElementById("file");
var name_file_el = document.getElementById("file-name");

file_el.addEventListener("change", () => {
  name_file_el.innerText = `O caminho do arquivo escolhido é: ${file_el.value}`;
});
