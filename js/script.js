let serachForm = document.querySelector('.serach-form');
document.querySelector('#search-btn').onclick = () =>{
    serachForm.classList.toggle('active');
}

const spans = document.querySelectorAll('.progress-bar span');

spans.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
});