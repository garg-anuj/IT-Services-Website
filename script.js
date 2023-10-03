const navbar = document.getElementById('navbar');
const slider = document.getElementById('slider');

const cardContainer = document.getElementById('contactCard');
// const mainContact = document.getElementById('mainContact');

logoBtn.addEventListener('click',()=>{   

    let result = (navbar.classList[0] =="navbar") ? "navbar-active" : "navbar";
    navbar.setAttribute("class", result); 
});


// window.addEventListener('resize',()=>{
//     console.log("resize",innerWidth);
//     slider.setAttribute("width",innerWidth)
// })


const mainContact = document.getElementById('mainContact')
fetch('Contact/contact.html')
    .then(response => response.text())
    .then(data => {
        mainContact.innerHTML = data;
    })
    .catch(error => console.error(error,"yes error"));

    