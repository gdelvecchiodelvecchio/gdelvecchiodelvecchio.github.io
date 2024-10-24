document.addEventListener("mousemove", function(e) {
      const glow = document.getElementById("glow-effect");
      const mouseX = e.clientX;
      const mouseY = e.clientY;
  
      // Set the radial gradient's position based on mouse coordinates
      glow.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(96, 92, 139, 0.35), rgba(21, 21, 42, 0.0) 40%)`;
  });
  
