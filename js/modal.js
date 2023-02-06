let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

let modal_text_el = document.getElementById('modal-text')

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}