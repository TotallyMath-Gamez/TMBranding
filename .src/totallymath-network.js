// Create image element
var mathIcon = document.createElement("img");
mathIcon.setAttribute("src", "https://raw.githubusercontent.com/TotallyMath-Gamez/TMBranding/main/resources/gif-spin.gif");
mathIcon.setAttribute("alt", "totallymath-icon");
mathIcon.setAttribute("style", "position: fixed;top: 8px;left: 8px;z-index: 99999;opacity: 0.80;width: 35px;height: 35px;border-radius: 10%;box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.65), 0 0 13px 5px rgba(0, 0, 0, 0.28);");

// Append image element to the document body
document.body.appendChild(mathIcon);

// Create text element
var mathText = document.createElement("div");
mathText.setAttribute("style", "position: fixed;bottom: 4px; left: 50%;transform: translateX(-50%);z-index:9999;background:rgba(0, 0, 0, 0.6);color:#ffffff;font-size:16px;padding:1px 5px;border-radius:6px;opacity:0.80;text-align:center;font-weight:bold;font-family:sans-serif;text-shadow:0px 0px 5px rgba(0, 0, 0, 1);");
mathText.innerHTML = "totally-math.netlify.app";

document.body.appendChild(mathText);

// Set text element opacity to 0
mathText.style.opacity = "0";

// Get the current domain
var currentDomain = window.location.hostname;
var allowedDomain = "totally-math.netlify.app";

// Check if the current domain is allowed
if (currentDomain !== allowedDomain) {
  // Change the text color to blue and add a pointer cursor
  mathText.style.color = "#6ec0ff";
  mathText.style.cursor = "pointer";
  mathIcon.style.cursor = "pointer";
  
  // Add event listener to open the allowed domain link when text or icon is clicked
  mathText.addEventListener("click", function () {
    window.open("https://" + allowedDomain, "_blank");
  });
  mathIcon.addEventListener("click", function () {
    window.open("https://totally-math.netlify.app/", "_blank");
  });
}

// Fade-in animation function for text and image elements
var fadeInEffect = function (timestamp) {
  var opacity = parseFloat(mathText.style.opacity);
  if (opacity < 0.80) {
    opacity += 0.01 * ((timestamp - fadeInEffect.startTime) / 900);
    if (opacity > 0.80) opacity = 0.80;
    mathText.style.opacity = opacity;
    mathIcon.style.opacity = opacity;
    if (opacity < 0.80) {
      requestAnimationFrame(fadeInEffect);
    }
  }
};

// Set start time for fade-in animation
fadeInEffect.startTime = performance.now();
requestAnimationFrame(fadeInEffect);

// After 2800ms, run fade-out animation to hide text and image elements
setTimeout(function () {
  var fadeOutStartTime = performance.now();
  var fadeOutEffect = function (timestamp) {
    var opacity = parseFloat(mathText.style.opacity);
    if (opacity > 0) {
      opacity -= 0.01 * ((timestamp - fadeOutEffect.startTime) / 700);
      if (opacity < 0) opacity = 0;
      mathText.style.opacity = opacity;
      mathIcon.style.opacity = opacity;
      if (opacity > 0) {
        requestAnimationFrame(fadeOutEffect);
      } else {
        // Remove text and image elements after fade-out animation
        mathText.remove();
        mathIcon.remove();
      }
    }
  };

  // Set start time for fade-out animation
  fadeOutEffect.startTime = fadeOutStartTime;
  requestAnimationFrame(fadeOutEffect);
}, 2800);
