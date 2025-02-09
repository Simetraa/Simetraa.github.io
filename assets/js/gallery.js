document.querySelectorAll(".gallery").forEach((gallery) => {
    let index = 0;
    const prevButtonEl = gallery.querySelector(".prev");
    const activeLabelEl = gallery.querySelector(".active-label");
    const nextButtonEl = gallery.querySelector(".next");
    const galleryItems = gallery.querySelectorAll(".gallery-images > li");
    const galleryImagesLength = galleryItems.length;

    function update(n) {
        console.log(n);
        galleryItems[index].classList.remove("active");
        index = (index + galleryImagesLength + n) % galleryImagesLength;
        galleryItems[index].classList.add("active");
        activeLabelEl.textContent = `${index + 1} / ${galleryImagesLength}`;
    }

    activeLabelEl.textContent = `${index + 1} / ${galleryImagesLength}`;

    prevButtonEl.addEventListener("click", () => update(-1));
    nextButtonEl.addEventListener("click", () => update(1));
});