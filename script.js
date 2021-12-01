const textInput = document.getElementById('text-input');
const imgInput = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');
const memeImg = document.getElementById('meme-image');
const container = document.getElementById('meme-image-container');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');

function transcryptText() {
  memeText.innerText = textInput.value;
}
//  source: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
function importImg(loadImg) {
  const img = loadImg.target;
  memeImg.src = URL.createObjectURL(img.files[0]);
}
function freeImgMemory(image) {
  URL.revokeObjectURL(image.src);
}
function newBorder(click) {
  const borderButton = click.target;
  container.className = borderButton.id;
}

textInput.onkeyup = transcryptText;
imgInput.onchange = importImg;
memeImg.onload = freeImgMemory;
fireButton.onclick = newBorder;
waterButton.onclick = newBorder;
earthButton.onclick = newBorder;
