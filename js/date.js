let date_el = document.getElementById("data");
let title_el = document.getElementById('date-title');
date_el.addEventListener('change', () => {
    title_el.innerText = date_el.value;
})
 