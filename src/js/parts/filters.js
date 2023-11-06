const filterOpenBtn = document.querySelector('.catalog__filters-open');
const filters = document.querySelector('.filters-box');

if (filterOpenBtn) {
    filterOpenBtn.addEventListener('click', (e) => {
        let targetEl = e.target;
        document.body.classList.toggle('_noscroll');
        filters.classList.toggle('_open');
    })
}
