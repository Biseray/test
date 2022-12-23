
const affichageImage = () =>{

let imgGalery = ["DSCF1523.jpg","DSCF1528-2.jpg","DSCF1557.jpg","DSCF1545.jpg","DSCF1543.jpg","DSCF1542.jpg","DSCF1539.jpg","DSCF1536.jpg","DSCF1536-2.jpg","DSCF1535.jpg",];

const contenaire = document.querySelector(".container");

let divImg = '';

imgGalery.forEach(img => {
    divImg += 
    ` <div >
    <img class="imageV" src="./img/${img}" alt="image">
</div>`
});

contenaire.innerHTML = divImg;
};

affichageImage()