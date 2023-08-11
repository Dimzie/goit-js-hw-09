const mainObject = {
    startButton: document.querySelector('[data-start]'),
    stopButton: document.querySelector('[data-stop]'),
    body: document.body,
}

id = null;
mainObject.stopButton.disabled = true;
  
mainObject.startButton.addEventListener('click', generateBodyBgColor);
mainObject.stopButton.addEventListener('click', stopGenRandomClr);
  
function generateBodyBgColor() {
    mainObject.startButton.disabled = true;
    mainObject.stopButton.disabled = false;
    id = setInterval(() => {
      mainObject.body.style.backgroundColor = getHexBodyClr();
    }, 1000);
}

function getHexBodyClr() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
  
function stopGenRandomClr() {
    clearInterval(id);
    mainObject.startButton.disabled = false;
    mainObject.stopButton.disabled = true;
}