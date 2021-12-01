const textInput = document.getElementById('text-input');
const imgInput = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');
const memeImg = document.getElementById('meme-image');

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

textInput.onkeyup = transcryptText;
imgInput.onchange = importImg;
memeImg.onload = freeImgMemory;
