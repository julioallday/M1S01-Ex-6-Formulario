var range_el = document.getElementById("range");
let valor_el = document.getElementById("valor")
valor_el.innerText = '0%';

range_el.addEventListener("change", () => {
  valor_el.innerText = range_el.value + '%';
});
