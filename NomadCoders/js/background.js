const images = [ "1.gif", "2.gif", "3.gif", "4.gif", "5.gif"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
let url = "img/"+chosenImage;

/*bgImage.src = `img/${chosenImage}`

bgImage.style.width = "1520px";
bgImage.style.height = "730px";*/

document.body.style.backgroundImage = "url("+url+")";
document.body.style.backgroundSize = "cover";

document.body.appendChild(bgImage);