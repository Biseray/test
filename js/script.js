
const affichageImage = () =>{

let imgGalery = [
//    NOIR ET BLANC 
"biseray9.jpg",
"biseray3.jpg",
"biseray4.jpg",
"biseray5.jpg",
"biseray6.jpg",
"biseray7.jpg",
"biseray10.jpg",
"biseray12.jpg",
"biseray13.jpg",
"biseray14.jpg",
"biseray15.jpg",
"biseray23.jpg",
"biseray24.jpg", 
"biseray.jpg ",
"DSCF1523.jpg",
"DSCF1528-2.jpg",
"DSCF1557.jpg",
"DSCF1545.jpg",
"DSCF1543.jpg",
"DSCF1542.jpg",
"DSCF1539.jpg",
"DSCF1536.jpg",
"DSCF1536-2.jpg",
"DSCF1535.jpg",
"DSCF0587.jpg",
"biseray16.jpg",
"biseray17.jpg",
"biseray18.jpg",
"biseray19.jpg",
"biseray20.jpg",
"biseray21.jpg",
"biseray22.jpg",
"biseray8.jpg",
"biseray2.png",
"biseray11.jpg"

];

const contenaire = document.querySelector(".container");

let divImg = '';

imgGalery.forEach(img => {
    divImg += 
    ` <div >
    <img class="imageV annimationImg" src="./img/${img}" alt="image">
</div>`
});

contenaire.innerHTML = divImg;
};

affichageImage()