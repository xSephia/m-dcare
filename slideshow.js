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
    const firstSlideshowContainer = document.createElement("div");
    firstSlideshowContainer.classList.add("slideshow");
    firstSlideshowContainer.style.width = "100%";
    firstSlideshowContainer.style.height = "100vh";
    firstSlideshowContainer.style.overflow = "hidden";
    mainContainer.appendChild(firstSlideshowContainer);
    
    const firstSlides = [];
    images.slice(0, 6).forEach((src, index) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");
        slide.style.backgroundImage = `url(${src})`;
        slide.style.width = "100%";
        slide.style.height = "100vh";
        slide.style.backgroundSize = "cover";
        slide.style.backgroundPosition = "center";
        if (index === 0) slide.classList.add("active");
        firstSlideshowContainer.appendChild(slide);
        firstSlides.push(slide);
    });
    
    let firstCurrentIndex = 0;
    setInterval(() => {
        firstSlides.forEach((slide) => slide.classList.remove("active"));
        firstCurrentIndex = (firstCurrentIndex + 1) % firstSlides.length;
        firstSlides[firstCurrentIndex].classList.add("active");
    }, 25000);
    
    // About M&D Care Section - Ensure It's Over the First Image
    const aboutSection = document.createElement("div");
    aboutSection.classList.add("overlay-text");
    aboutSection.innerHTML = `<h2>About M&D Care</h2>
        <p>At M&D Care, we are dedicated to empowering individuals with developmental disabilities by offering personalized services that promote independence, dignity, and well-being.</p>`;
    firstSlideshowContainer.appendChild(aboutSection);
    
    // Separator Before Second Image
    const servicesSection = document.createElement("div");
    servicesSection.classList.add("separator");
    servicesSection.innerHTML = `<h2>Our Services</h2>
        <p><strong>Supporting Individuals with Developmental Disabilities</strong></p>
        <p>Providing compassionate care and tailored support services to enhance the quality of life for individuals with developmental disabilities.</p>`;
    mainContainer.appendChild(servicesSection);
    
    // Second Slideshow Section
    const secondSlideshowContainer = document.createElement("div");
    secondSlideshowContainer.classList.add("slideshow");
    secondSlideshowContainer.style.width = "100%";
    secondSlideshowContainer.style.height = "100vh";
    secondSlideshowContainer.style.overflow = "hidden";
    mainContainer.appendChild(secondSlideshowContainer);
    
    const secondSlides = [];
    images.slice(6, 12).forEach((src, index) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");
        slide.style.backgroundImage = `url(${src})`;
        slide.style.width = "100%";
        slide.style.height = "100vh";
        slide.style.backgroundSize = "cover";
        slide.style.backgroundPosition = "center";
        if (index === 0) slide.classList.add("active");
        secondSlideshowContainer.appendChild(slide);
        secondSlides.push(slide);
    });
    
    let secondCurrentIndex = 0;
    setInterval(() => {
        secondSlides.forEach((slide) => slide.classList.remove("active"));
        secondCurrentIndex = (secondCurrentIndex + 1) % secondSlides.length;
        secondSlides[secondCurrentIndex].classList.add("active");
    }, 25000);
    
    // Core Services Text Over Second Slideshow
    const coreServicesOverlay = document.createElement("div");
    coreServicesOverlay.classList.add("overlay-text");
    coreServicesOverlay.innerHTML = `
        <h2>Our Core Services</h2>
        <p><strong>Personalized Care Plans:</strong> Designed for you</p>
        <p><strong>Community Integration Support:</strong> Thrive among your peers</p>
        <p><strong>Life Skills Development:</strong> Develop independent life skills</p>
        <p><strong>Family Counseling and Resources:</strong> Become stronger, together</p>
    `;
    secondSlideshowContainer.appendChild(coreServicesOverlay);
});

    `;
    secondSlideshowContainer.appendChild(coreServicesOverlay);
});
