const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-links li a');
const icon = document.getElementById('icon');

// Toggle the 'active' class for both the hamburger icon and the nav links
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');

  // Toggle between hamburger and close icon
  if (hamburger.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark'); // Close icon
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars'); // Hamburger icon
  }
});

// Close nav links when a link is clicked
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  });
});

// Close nav links on scroll in mobile view
window.addEventListener('scroll', () => {
  if (window.innerWidth <= 768) { // Check if the viewport width is less than or equal to 768px
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  }
});



// animation for icons 
const boxes = document.querySelectorAll(".icon");

// Loop through each box and add event listeners
boxes.forEach((box) => {
  const boxRect = box.getBoundingClientRect(); // Get box dimensions

  box.addEventListener("mousemove", function (event) {
    const xPos = (event.clientX - boxRect.left) / boxRect.width; // Calculate X position within box
    const yPos = (event.clientY - boxRect.top) / boxRect.height; // Calculate Y position within box

    const xOffset = (xPos - 0.5); // Normalize X position
    const yOffset = (yPos - 0.5); // Normalize Y position

    const dxNorm = Math.min(Math.max(xOffset, -0.5), 0.5); // Clamp values to -0.5 to 0.5
    const dyNorm = Math.min(Math.max(yOffset, -0.5), 0.5);

    // Apply the 3D rotation based on the calculated offsets
    box.style.transform = `perspective(1000px) rotateY(${dxNorm * 45}deg) rotateX(${dyNorm * -45}deg)`;
  });

  // Reset the transformation when the mouse leaves the box
  box.addEventListener("mouseleave", function () {
    box.style.transform = "none"; // Reset the transformation on mouse leave
  });
});














