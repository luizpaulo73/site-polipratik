// const slider = document.querySelector(".imagem-comparacao .slider");
// const beforeImage = document.querySelector(".imagem-comparacao .antes-imagem")
// const sliderLine = document.querySelector(".imagem-comparacao .slider-line")
// const sliderIcon = document.querySelector(".imagem-comparacao .slider-icon")


// slider.addEventListener("input" , (e) => {
//     let sliderValue = e.target.value + "%";

//     beforeImage.style.width = sliderValue;
//     sliderLine.style.left = sliderValue;
//     sliderIcon.style.left = sliderValue;
// });

// SLIDER GRISS
const sliderGriss = document.querySelector(".imagem-comparacao-griss .slider-griss");
const beforeImageGriss = document.querySelector(".imagem-comparacao-griss .antes-imagem-griss")
const sliderLineGriss = document.querySelector(".imagem-comparacao-griss .slider-line-griss")
const sliderIconGriss = document.querySelector(".imagem-comparacao-griss .slider-icon-griss")


sliderGriss.addEventListener("input" , (e) => {
    let sliderValue = e.target.value + "%";

    beforeImageGriss.style.width = sliderValue;
    sliderLineGriss.style.left = sliderValue;
    sliderIconGriss.style.left = sliderValue;
});

// SLIDER PRIVE
const sliderPrive = document.querySelector(".imagem-comparacao-prive .slider-prive");
const beforeImagePrive = document.querySelector(".imagem-comparacao-prive .antes-imagem-prive")
const sliderLinePrive = document.querySelector(".imagem-comparacao-prive .slider-line-prive")
const sliderIconPrive = document.querySelector(".imagem-comparacao-prive .slider-icon-prive")


sliderPrive.addEventListener("input" , (e) => {
    let sliderValue = e.target.value + "%";

    beforeImagePrive.style.width = sliderValue;
    sliderLinePrive.style.left = sliderValue;
    sliderIconPrive.style.left = sliderValue;
});

// SLIDER COMMERCE
const sliderCommerce = document.querySelector(".imagem-comparacao-commerce .slider-commerce");
const beforeImageCommerce = document.querySelector(".imagem-comparacao-commerce .antes-imagem-commerce")
const sliderLineCommerce = document.querySelector(".imagem-comparacao-commerce .slider-line-commerce")
const sliderIconCommerce = document.querySelector(".imagem-comparacao-commerce .slider-icon-commerce")


sliderCommerce.addEventListener("input" , (e) => {
    let sliderValue = e.target.value + "%";

    beforeImageCommerce.style.width = sliderValue;
    sliderLineCommerce.style.left = sliderValue;
    sliderIconCommerce.style.left = sliderValue;
});

window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading-screen');
    var content = document.getElementById('content');

    setTimeout(function() {
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
    }, 2500);
});