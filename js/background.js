
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
let url = "img/"+chosenImage;

/*bgImage.src = `img/${chosenImage}`

bgImage.style.width = "1520px";
bgImage.style.height = "730px";*/

document.body.style.backgroundImage = "url("+url+")";
document.body.style.backgroundSize = "cover";


document.body.appendChild(bgImage);