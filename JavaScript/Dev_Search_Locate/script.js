const search = document.getElementById("search");
const btnSearch = document.querySelector("button");
const imgContaint = document.getElementById("imageContent");
const myCart=document.getElementById("carte")
const imageFull=document.querySelector(".ImageFull")


// const apiKey="a32778dd3880d798d48e2eefe590f50a"
// const url=`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=people`

function AfficheFullImage(source){
    const image=document.createElement("img")
    image.src=source
    
    imageFull.append(image)

}

function afficheImage(searchText) {
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a32778dd3880d798d48e2eefe590f50a&text=${searchText}&format=json&nojsoncallback=1&extras=geo,description,url_o,url_m,url_q`;

  fetch(url)
    .then((resp) => {
      return resp.json();
    })

    .then((data) => {
      for (const img of data.photos.photo) {
        const imgCard=document.createElement("div")
        const image = document.createElement("img");
        // console.log(img);

        imgCard.classList.add('imgCard')

        image.src = img.url_q;
        image.alt = img.title;
        image.classList.add("rechImg");

        const latitude = img.latitude || "Non disponible";
        const longitude = img.longitude || "Non disponible";

        image.addEventListener("mouseover",function(event){
            // alert("image Survoller")

            AfficheFullImage(img.url_o)
        })

        //  console.log(latitude,longitude);
        imgCard.append(image)
        imgContaint.append(imgCard);
      }
    })

    .catch((error) => {
      console.log("Erreur : ", error);
    });
}

function afficheCarte(){
   var map=L.map("carte").setView([0, 0], 2)
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); 


}


afficheCarte()

btnSearch.addEventListener("click", function (event) {
  event.preventDefault();
  let TextSearch = search.value;
  TextSearch = TextSearch.trim();
  TextSearch = TextSearch.toLowerCase();

  myCart.style.width="100%"
  imgContaint.style.width="100%"

  if (TextSearch !== "" && TextSearch.length >= 3) {
    afficheImage(TextSearch);
  } else {
    console.log("pas bon !!!!");
  }
});



// var map = L.map('map').setView([51.505, -0.09], 13);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map); 


function ouvrir(){
    const content=document.querySelector('.ImageFull')
    const btn=document.querySelector('button')



    content.style.display='flex'


}