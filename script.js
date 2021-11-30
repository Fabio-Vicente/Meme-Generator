const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

function transcryptText() {
  memeText.innerText = textInput.value;
}

textInput.onkeyup = transcryptText;
