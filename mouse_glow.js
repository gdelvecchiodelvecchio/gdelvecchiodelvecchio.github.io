
// first I get the position of the mouse when the page loads and activate the effect only when the mouse moves
// the code below is to get the mouse glow effect
/*
document.addEventListener("mousemove", function(e) {
  const glow = document.getElementById("glow-effect");
  glow.style.display = 'block';
});

document.addEventListener("mousemove", function(e) {
    const glow = document.getElementById("glow-effect");
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    // Set the radial gradient's position based on mouse coordinates
    glow.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(96, 92, 139, 0.35), rgba(21, 21, 42, 0.0) 10%)`;
    //glow.style.height = '100%';
    //glow.style.width = '1000%';
  });
*/

  document.addEventListener("mousemove", function(e) {
    const glow = document.getElementById("glow-effect");
    glow.style.display = 'block'; // Ensure it's visible

    // Dynamically set the height of the glow effect to match the page's scroll height
    glow.style.height = `${document.documentElement.scrollHeight}px`;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Position the glow effect with a radial gradient centered on the mouse
    glow.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(96, 92, 139, 0.35), rgba(21, 21, 42, 0.0) 10%)`;
});