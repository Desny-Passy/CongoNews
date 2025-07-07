var menu_hambueger = document.querySelector('.bi-list');
var menu = document.querySelector('.menu-container');
var fermer_menu = document.querySelector('.bi-x');
menu_hambueger.addEventListener('click', ()=>{
    // Toggle the display of the menu based on the checkbox state  {
   menu.classList.toggle('active');
})
fermer_menu.addEventListener('click', ()=>{
    // Toggle the display of the menu based on the checkbox state  {
   menu.classList.remove('active');
})