const faders = document.querySelectorAll('.item--lazy');

const options = {
    threshold: 0.25
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            const image = entry.target.querySelector('[data-src]');
            preloadImage(image);
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, options);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
}
);

// const images = document.querySelectorAll('[data-src]');

// const imgOptions = {
//     threshold: 0,
// }

function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if (!src) {
        return;
    }
    img.src = src;
};

// const imgObserver = new IntersectionObserver((entries, imgObserver) => {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             return
//         } else {
//             preloadImage(entry.target)
//             imgObserver.unobserve(entry.target)
//         }
//     })

// }, imgOptions)


// images.forEach(image =>
//     imgObserver.observe(image)
// )