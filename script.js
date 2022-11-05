const mainImg = document.querySelector(".main-img");
const images = document.querySelectorAll(".images-container img");
const opacity = 0.6;


images[0].style.opacity = opacity;

images.forEach(image => image.addEventListener("click",changeImage));

function changeImage(e){
    images.forEach(image => (image.style.opacity = 1));
    mainImg.src = e.target.src;
    mainImg.classList.add("fade-in");
    setTimeout(() => mainImg.classList.remove("fade-in"),500)
    e.target.style.opacity = opacity;
}