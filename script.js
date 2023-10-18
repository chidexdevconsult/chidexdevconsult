const menu = document.querySelector('#menu-icon');
const sidebar = document.querySelector('.sidebar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    sidebar.classList.toggle('active');
}
