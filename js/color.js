
var cor_el = document.getElementById("color");
let cor_legend_el = document.getElementById("cores");

cor_el.addEventListener('input', ()=>{
    cor_legend_el.style.backgroundColor = cor_el.value;
})




