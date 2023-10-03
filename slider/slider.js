const img1 = 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8a89ee09acc1a9e5.jpg?q=20'
const img2 ='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1e48145459e339b1.jpg?q=20';
const img3 = 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/157060918ffa1077.jpg?q=20';
const img4 = 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4801adbcf39acbc1.jpg?q=20';
const img5 ='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4529fd434a85c683.jpg?q=20';
const img6 = 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5ef4544fa7407fb0.jpg?q=20';

const IMAGES = [img1,img2,img3,img4,img5,img6];
const length = IMAGES.length

const increment = document.getElementById("increment");
const decrement =  document.getElementById("decrement");
const imgContainer = document.getElementById("imgContainer");
const radioContainer = document.getElementById('radio-container');

let i =0  //index

function current(data){
    imgContainer.innerHTML=`<img id="showSlider" src=${IMAGES[(data+length)%length]}>`;
    setTimeout(()=> showSlider.style.transform = "translate(0%)",100);
}
function myBtn(data){
    i = data
    imgContainer.innerHTML=`<img id="showSlider" src=${IMAGES[(data+length)%length]}>`;
}



increment.addEventListener('click',()=>{
    i=(i+1)%length;
    radioButtons[i].checked = true;
    showSlider.style.transform = "translate(100%)";

    setTimeout(()=>{
        current(i);
        showSlider.style.transform = "translate(-100%)";
    },1000);

});

// setInterval(increment.addEventListener('click'),3000)


decrement.addEventListener('click',()=>{
    i=(i-1)%length;
    // current(i)
    radioButtons[(i+length)%length].checked = true;
    showSlider.style.transform="translate(-100%)";

    setTimeout(()=>{
        current(i)
        showSlider.style.transform="translate(90%)";
    },1000)
});




const radioButtons =[];
IMAGES.forEach((ele,index)=>{
    const radioElement = document.createElement("input");
    radioElement.type = "radio";
    radioElement.name = "option"
    radioElement.id=`option${index}`
    radioElement.addEventListener('click',()=>myBtn(index));
    radioContainer.append(radioElement);
    const labelElement = document.createElement("label");
    labelElement.htmlFor = `option${index}`;
    radioContainer.append(labelElement);

    radioButtons.push(radioElement);

})


current(0)
radioButtons[0].checked = true;



function work(){
    increment.click()
}
setInterval(work,3000)