// GSAP animations example (for twinkling stars animation)
gsap.fromTo('.twinkle', { opacity: 0 }, { opacity: 1, duration: 1, repeat: -1, yoyo: true });

// Display bullet points with animation
const bulletPoints = document.querySelectorAll('.animate-bullets li');
bulletPoints.forEach((item, index) => {
    gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: index * 0.2 + 2 // 2 second initial delay
    });
});
