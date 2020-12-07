let lftArrow = document.querySelector('.js-arr-lft');
let rgtArrow = document.querySelector('.js-arr-rgt');
let allImgs = document.querySelectorAll('.js-wrap');

let n = 0;
lftArrow.addEventListener("click", () => {
    if ((n < allImgs.length - 1)) {
        allImgs[n].style.marginLeft = "-500px";
        n = n + 1;
        console.log(n);
    } if (n == allImgs.length - 1) {
        lftArrow.classList.add("inActive");
        rgtArrow.classList.add("active");
        rgtArrow.classList.remove("inActive");
    }
});
rgtArrow.addEventListener("click", () => {
    if (n > 0) {
        n = n - 1;
        allImgs[n].style.marginLeft = "0";
    } if (n == 0) {
        lftArrow.classList.add("active");
        rgtArrow.classList.add("inActive");
        lftArrow.classList.remove("inActive");
    }
});