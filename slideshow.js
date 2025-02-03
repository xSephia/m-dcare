document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "images/bg1.jpg", "images/bg2.jpg", "images/bg3.jpg", "images/bg4.jpg", 
        "images/bg5.jpg", "images/bg6.jpg", "images/bg7.jpg", "images/bg8.jpg", 
        "images/bg9.jpg", "images/bg10.jpg", "images/bg11.jpg", "images/bg12.jpg"
    ];
    
    const slides = [];
    const slideshowContainer = document.createElement("div");
    slideshowContainer.classList.add("slideshow");
    document.body.insertBefore(slideshowContainer, document.body.firstChild);
    
    images.forEach((src, index) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");
        slide.style.backgroundImage = `url(${src})`;
        if (index < 2) slide.classList.add("active");
        slideshowContainer.appendChild(slide);
        slides.push(slide);
    });
    
    let currentIndex = 0;
    setInterval(() => {
        slides.forEach((slide) => slide.classList.remove("active"));
        
        for (let i = 0; i < 2; i++) {
            let nextIndex = (currentIndex + i) % slides.length;
            slides[nextIndex].classList.add("active");
        }
        
        currentIndex = (currentIndex + 1) % slides.length;
    }, 25000);
    
    // Creating separators with text
    const aboutSection = document.createElement("div");
    aboutSection.classList.add("separator");
    aboutSection.innerHTML = `<h2>About M&D Care</h2><p>At M&D Care, we are dedicated to empowering individuals with developmental disabilities by offering personalized services that promote independence, dignity, and well-being.</p>`;
    slideshowContainer.insertAdjacentElement("afterend", aboutSection);
    
    const servicesSection = document.createElement("div");
    servicesSection.classList.add("separator");
    servicesSection.innerHTML = `<h2>Our Services</h2>`;
    aboutSection.insertAdjacentElement("afterend", servicesSection);
});
