const menulist = document.querySelector('.list-open');
const menuopen = document.querySelector('.menu-open');
const menuclose = document.querySelector('.menu-close');
const navLinks = document.querySelectorAll('nav a'); 
const div = document.querySelectorAll('div [id]');
menulist.style.maxHeight = '0px';

function show() {
 if (menulist.style.maxHeight =='0px'){
  menulist.style.maxHeight = '300px';
  menuopen.style.display = 'none';
  menuclose.style.display = 'flex';
  }else{
  closeMenu();
 }
}
function closeMenu(){
  menulist.style.maxHeight = '0px';
  menuopen.style.display = 'flex';
  menuclose.style.display = 'none';
}


window.addEventListener("resize",() =>{
  if(window.innerWidth > 980){
    menulist.style.maxHeight = '0px';
    menuopen.style.display = 'none';
    menuclose.style.display = 'none';
  }else{
    menuopen.style.display = 'flex';
    menuclose.style.display = 'none';
  }
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 980) {
      closeMenu(); // Close the menu on mobile
    }
  });
});

window.onscroll =()=>{
  div.forEach(div =>{
    let top = window.scrollY;
    let offset = div.offsetTop -150;
    let height = div.offsetHeight;
    let id = div.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(link =>{
        link.classList.remove('active');
      });
      document.querySelector(`nav a[href='#${id}']`).classList.add('active');
    }
  })
}