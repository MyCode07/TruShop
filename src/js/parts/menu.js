import { lockPadding, unLockPadding } from '../utils/lockPadding.js';

const body = document.body;
const menuLinks = document.querySelectorAll('[data-open-menu]');
const header = document.querySelector('.header');
const menuAll = document.querySelectorAll('.menu');
const menuItem = document.querySelectorAll('._menu-item');


if (menuAll.length) {
    const headerCoords = document.querySelector('.header').getBoundingClientRect();
    menuAll.forEach(menu => {
        if (document.querySelector('.offer._close')) {
            menu.style.top = headerCoords.height + 40 + "px";
        }
        if (menu.dataset.id == 'menu-basket') {
            menu.style.top = 0 + "px";
        }
        else {
            menu.style.top = headerCoords.height + "px";
        }
    })
}

if (menuLinks.length) {
    menuLinks.forEach(link => {
        const menuType = link.dataset.openMenu
        const menu = document.querySelector(`.menu[data-id="${menuType}"]`);

        link.addEventListener('click', (e) => {
            if (menu) {
                if (menu.classList.contains('_open')) unLockPadding();
                else lockPadding()

                if (document.querySelector('.menu._open') && document.querySelector('._menu-item._active')) {
                    menuAll.forEach(menu => {
                        menu.classList.remove('_open');
                        body.classList.remove('_noscroll');
                    })

                    menuItem.forEach(link => {
                        link.classList.remove('_active');
                    })

                    menu.classList.toggle('_open');
                    link.classList.toggle('_active');

                } else {
                    menu.classList.toggle('_open');
                    link.classList.toggle('_active');
                }

                header.classList.add('_active');
                body.classList.toggle('_noscroll');
            }
        })
    })
}

document.addEventListener('click', (e) => {
    let targetEl = e.target;
    if (!targetEl.hasAttribute('data-open-menu') && !targetEl.classList.contains('menu') && !targetEl.closest('.menu') && document.querySelector('.menu._open') && !targetEl.classList.contains('_close-button')) {
        document.querySelector('.menu._open').classList.remove('_open')
        header.classList.remove('_active');
        body.classList.remove('_noscroll');
        
        if (document.querySelector('._menu-item._active')) {
            document.querySelector('._menu-item._active').classList.remove('_active')
        }
    }

    if (targetEl.classList.contains('_close-button')) {
        const offer = targetEl.closest('.offer');
        const menu = targetEl.closest('._basket')
        const search = targetEl.closest('._search')
        const login = targetEl.closest('.login')
        const filterBox = targetEl.closest('.filters-box')

        if (offer) {
            offer.classList.add('_close')
            header.classList.add('_top');
            setTimeout(() => {
                offer.remove()
            }, 500);
        }

        if (document.querySelector('._basket._open')) {
            menu.classList.remove('_open')
        }
        if (document.querySelector('.filters-box._open')) {
            filterBox.classList.remove('_open')
        }
        if (document.querySelector('._search._open')) {
            search.classList.remove('_open')
            document.querySelector('._menu-item._active').classList.remove('_active')
        }

        if (document.querySelector('.login._open')) {
            login.classList.remove('_open')
        }
    }
})