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
    
    function createSlideshow(container, imageSet) {
        container.classList.add("slideshow");
        container.style.width = "100%";
        container.style.height = "50vh";
        container.style.overflow = "hidden";
        mainContainer.appendChild(container);
        
        const slides = [];
        imageSet.forEach((src, index) => {
            const slide = document.createElement("div");
            slide.classList.add("slide");
            slide.style.backgroundImage = `url(${src})`;
            slide.style.width = "100%";
            slide.style.height = "50vh";
            slide.style.backgroundSize = "cover";
            slide.style.backgroundPosition = "center";
            slide.style.position = "absolute";
            slide.style.top = "0";
            slide.style.left = "0";
            slide.style.right = "0";
            slide.style.bottom = "0";
            slide.style.opacity = "0";
            slide.style.transition = "opacity 1s ease-in-out";
            if (index === 0) slide.style.opacity = "1";
            container.appendChild(slide);
            slides.push(slide);
        });
        
        let currentIndex = 0;
        setInterval(() => {
            slides.forEach(slide => slide.style.opacity = "0");
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].style.opacity = "1";
        }, 25000);
    }
    
    // First Slideshow Section
    const firstSlideshowContainer = document.createElement("div");
    createSlideshow(firstSlideshowContainer, images.slice(0, 6));
    
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
    createSlideshow(secondSlideshowContainer, images.slice(6, 12));
    
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
