document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('checkin-button').addEventListener('click', function () {
    const button = document.getElementById('checkin-button');
      const streakSpan = document.getElementById('streak');
      const svg = streakSpan.querySelector('svg').cloneNode(true); // Clone the SVG
      const streakText = streakSpan.querySelector('p').textContent; // Get the text inside the <p> tag
      const streakNumber = parseInt(streakText.match(/\d+/)[0]); // Extract the current streak number

      // Increment the streak
      const newStreak = streakNumber + 1;

      // Update the button content
      button.innerHTML = `
      <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.2779 1.9C11.4887 2.61621 10.776 3.36916 10.1446 4.12545C9.11018 2.73199 7.82759 1.3185 6.375 0C2.64638 3.38326 0 7.79148 0 10.45C0 15.1722 3.80565 19 8.5 19C13.1944 19 17 15.1722 17 10.45C17 8.47318 15.0275 4.39598 12.2779 1.9ZM11.5391 14.5413C10.7172 15.1039 9.70366 15.4375 8.60853 15.4375C5.87069 15.4375 3.64286 13.6659 3.64286 10.7896C3.64286 9.35676 4.56533 8.0943 6.40498 5.9375C6.66795 6.23363 10.1552 10.5888 10.1552 10.5888L12.38 8.10691C12.5371 8.36111 12.6802 8.60975 12.8077 8.84799C13.8455 10.7847 13.4076 13.2629 11.5391 14.5413Z" fill="#FFFFFF"/>
      </svg>
      ${newStreak} Day Surfing Streak
    `;

    button.style.background="#EE6C4D"

    // Replace the span content
    streakSpan.innerHTML = "You're checked in!";
    streakSpan.style.color = "#293241"
  });


  // Data for forecast
const beaches = [
  { name: "La Jolla Shores", forecast: 5 },
  { name: "Scripps", forecast: 5 },
  { name: "Pipes", forecast: 5 },
  { name: "Del Mar", forecast: 5 },
];

// Function to get a random color from the predefined set
function getRandomColor() {
  const colors = ["#FFBD4A", "#C15B17", "#17C11D"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Function to create a circle SVG
function createCircle(color) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "17");
  svg.setAttribute("height", "17");
  svg.setAttribute("viewBox", "0 0 17 17");
  svg.setAttribute("fill", "none");

  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", "8.5");
  circle.setAttribute("cy", "8.5");
  circle.setAttribute("r", "8.5");
  circle.setAttribute("fill", color);

  svg.appendChild(circle);
  return svg;
}

// Function to create a star SVG
function createStar() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "25");
  svg.setAttribute("height", "25");
  svg.setAttribute("viewBox", "0 0 17 17");
  svg.setAttribute("fill", "#17C11D");

  const star = document.createElementNS("http://www.w3.org/2000/svg", "path");
  star.setAttribute("d", "M8.5 0L10.2 5.5H15L11 8.5L12.6 13.5L8.5 10L4.4 13.5L6 8.5L2 5.5H6.8L8.5 0Z");

  svg.appendChild(star);
  return svg;
}

// Function to create the forecast with circles or a star
function createForecastCircles(forecastCount) {
  let elements = [];
  let starPlaced = false;

  for (let i = 0; i < forecastCount; i++) {
    const color = getRandomColor();

    if (color === "#17C11D" && !starPlaced) {
      // If color is #17C11D, replace with a star and ensure only one star is placed
      elements.push(createStar());
      starPlaced = true;
    } else {
      // Otherwise, create a circle with the random color
      elements.push(createCircle(color));
    }
  }

  return elements;
}

// Function to render forecasts
function renderForecasts() {
  const forecastList = document.getElementById("forecast-list");

  beaches.forEach((beach) => {
    // Create forecast container
    const forecast = document.createElement("div");
    forecast.classList.add("forecast");

    // Create location header
    const location = document.createElement("h3");
    location.classList.add("location");
    location.textContent = beach.name;

    // Create beach forecast container
    const beachForecast = document.createElement("div");
    beachForecast.classList.add("beach-forecast");

    // Add circles or a star based on forecast count
    const elements = createForecastCircles(beach.forecast);
    elements.forEach(element => beachForecast.appendChild(element));

    // Append elements
    forecast.appendChild(location);
    forecast.appendChild(beachForecast);
    forecastList.appendChild(forecast);
  });
}

// Initialize forecasts
renderForecasts();


});

function openPopup() {
  const popup = document.getElementById("popup");
  if (popup) {
      popup.style.display = "block";  // Show the popup
  } else {
      console.error("Popup element not found!");
  }
}

function closePopup() {
  const popup = document.getElementById("popup");
  if (popup) {
      popup.style.display = "none";  // Hide the popup
  } else {
      console.error("Popup element not found!");
  }
}

function noPage() {
  alert("This page has not been implemented");
}
