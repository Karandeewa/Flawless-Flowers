const menuBtn = document.getElementById('menu-icon');
const menu = document.getElementById('responsive-menu');

function responsiveMenu() {
    if (menu.style.right == '0px')
     { menu.style.right = '-400px' ;
       menu.style.display= 'none'
    } 
     else{
        menu.style.display= 'block'
        menu.style.right = '0'
        

     }

}