var imgs = document.getElementById("img1");
var pics = document.getElementById("pict")
function newImage() {
    imgs.src="new.jpeg"
}
function oldImage() {
    imgs.src="https://static-cms.hotjar.com/images/what-is-CX.width-750.png"
}
imgs.addEventListener('mouseover', mouseIn);
imgs.addEventListener('mouseout', mouseOut);