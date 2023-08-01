// Get all the image elements with their respective names and colors
const images = [
    { element: document.getElementById("image1"), bgColor: "blue", textColor: "white" },
    { element: document.getElementById("image2"), bgColor: "green", textColor: "yellow" },
    { element: document.getElementById("image3"), bgColor: "orange", textColor: "black" },
    { element: document.getElementById("image4"), bgColor: "red", textColor: "grey" },
    { element: document.getElementById("image5"), bgColor: "purple", textColor: "green" },
    { element: document.getElementById("image6"), bgColor: "teal", textColor: "blue" }
  ];
  
  // Add click event listeners to each image element
  images.forEach((imageData) => {
    imageData.element.addEventListener('click', (event) => {
      event.target.style.background = imageData.bgColor;
      event.target.style.color = imageData.textColor;
    });
  });
  
  