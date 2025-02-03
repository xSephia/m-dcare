document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "images/bg1.jpg", "images/bg2.jpg", "images/bg3.jpg", "images/bg4.jpg", 
        "images/bg5.jpg", "images/bg6.jpg", "images/bg7.jpg", "images/bg8.jpg", 
        "images/bg9.jpg", "images/bg10.jpg", "images/bg11.jpg", "images/bg12.jpg"
    ];
    
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main-content");
    
    const header = document.querySelector("header");
    header.insertAdjacentElement("afterend", mainContainer);
    
    // First Slideshow Section
    const slideshowContainer = document.createElement("div");
    slideshowContainer.classList.add("slideshow");
    mainContainer.appendChild(slideshowContainer);
    
    const slides = [];
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
    
    // About M&D Care Section - Ensure It's Over the First Image
    const aboutSection = document.createElement("div");
    aboutSection.classList.add("overlay-text");
    aboutSection.innerHTML = `<h2>About M&D Care</h2>
        <p>At M&D Care, we are dedicated to empowering individuals with developmental disabilities by offering personalized services that promote independence, dignity, and well-being.</p>`;
    slideshowContainer.appendChild(aboutSection);
    
    // Adjust the overlay placement to make it centered on the first image
    aboutSection.style.position = "absolute";
    aboutSection.style.top = "50%";
    aboutSection.style.left = "50%";
    aboutSection.style.transform = "translate(-50%, -50%)";
    aboutSection.style.color = "white";
    aboutSection.style.textAlign = "center";
    aboutSection.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    aboutSection.style.padding = "30px";
    aboutSection.style.borderRadius = "10px";
    aboutSection.style.maxWidth = "80%";
    
    // Our Services Section - Below First Image
    const servicesSection = document.createElement("div");
    servicesSection.classList.add("separator");
    servicesSection.innerHTML = `<h2>Our Services</h2>
        <p><strong>Supporting Individuals with Developmental Disabilities</strong></p>
        <p>Providing compassionate care and tailored support services to enhance the quality of life for individuals with developmental disabilities.</p>`;
    mainContainer.appendChild(servicesSection);
});

