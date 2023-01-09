const imgBoxs = document.querySelectorAll('.imgBox');
// console.log(imgBoxs)

// * Resimlere active classını ekleyen kod satırı.
imgBoxs.forEach(imgs => {
    imgs.addEventListener('click', () => {
        // ? Burada tıkladığım tüm resimlere active classı ekleniyor.
        // ? Benim istediğim sadece tıklanan resime active klası eklenip diğerlerinden kaldırılması. 
        // ? Bunun için removeActive() diye bir fonksiyon oluşturuyorumm.
        removeActive();
        imgs.classList.add('active');
    })
})

function removeActive() {
    imgBoxs.forEach(imgs => {
        imgs.classList.remove('active');
    })
}