const footerIcons = ["gmail-icon", "messenger-icon", "whatsapp-icon", "instagram-icon"]

footerIcons.forEach(fIcons =>{
    const icons = document.getElementById(fIcons);

    icons.addEventListener('mouseenter', function(){
        icons.classList.add('bx-tada')
    });
    icons.addEventListener('mouseleave', function(){
        icons.classList.remove('bx-tada')
    })
})

window.onload = function () {
    
    const logoMarca = document.getElementById("logo");

    logoMarca.onclick = function reload () {
        window.location.reload();
    };
}

function scrollNav() {
    const nav = document.getElementById('nav');
    const pixelsAmount = 50;

    if(window.pageYOffset > pixelsAmount) {
        nav.classList.add('change__nav');
    }
    else {
        nav.classList.remove('change__nav');
    }
}

window.addEventListener('scroll', function () {
    scrollNav();
});