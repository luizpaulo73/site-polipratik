const slider = document.querySelector(".imagem-comparacao .slider");
const beforeImage = document.querySelector(".imagem-comparacao .antes-imagem")
const sliderLine = document.querySelector(".imagem-comparacao .slider-line")
const sliderIcon = document.querySelector(".imagem-comparacao .slider-icon")


slider.addEventListener("input" , (e) => {
    let sliderValue = e.target.value + "%";

    beforeImage.style.width = sliderValue;
    sliderLine.style.left = sliderValue;
    sliderIcon.style.left = sliderValue;
});