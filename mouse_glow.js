
// first I get the position of the mouse when the page loads and activate the effect only when the mouse moves


document.addEventListener("mousemove", function(e) {
  const glow = document.getElementById("glow-effect");
  glow.style.display = 'block';
});

document.addEventListener("mousemove", function(e) {
    const glow = document.getElementById("glow-effect");
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    // Set the radial gradient's position based on mouse coordinates
    glow.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(96, 92, 139, 0.35), rgba(21, 21, 42, 0.0) 40%)`;
});

  
//glow-effect

