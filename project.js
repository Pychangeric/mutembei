window.onload = function () {
  Particles.init({
    selector: ".background",
    maxParticle: 200,
    speed: 0.5,
    connectParticles: true,
    color: "#FFFF00",
  });
};

fetch("http://localhost:3000/universities")
.then(response => response.json())
.then(data => {
  const universitiesContainer = document.getElementById("universities-container");
  data.forEach((university) => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
  
    // Add a like button/icon
    const likeIcon = document.createElement("i");
    likeIcon.classList.add("far", "fa-heart", "like-icon");
    likeIcon.setAttribute("data-id", university.id);
    cardContainer.appendChild(likeIcon);
  
    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img");
    cardImg.src = university.poster;
    cardImg.alt = university.name;
  
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
  
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = university.name;
  
    const cardTextCountry = document.createElement("p");
    cardTextCountry.classList.add("card-text");
    cardTextCountry.textContent = `Country: ${university.country}`;
  
    const cardLinkWebsite = document.createElement("p");
    cardLinkWebsite.classList.add("card-text");
    cardLinkWebsite.innerHTML = `Website: <a href="${
      university.web_pages[0]
    }" class="card-link">${university.web_pages[0]}</a>`;
  
    const cardTextLocation = document.createElement("p");
    cardTextLocation.classList.add("card-text");
    cardTextLocation.textContent = `Location: ${university.location}`;
  
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardTextCountry);
    cardContent.appendChild(cardLinkWebsite);
    cardContent.appendChild(cardTextLocation);
  
    cardContainer.appendChild(cardImg);
    cardContainer.appendChild(cardContent);
  
    universitiesContainer.appendChild(cardContainer);
  });
})
.catch(error => {
  console.error(error);
});
// Get the chat popup element and the open button
const chatPopup = document.getElementById("myChat");
const openButton = document.getElementById("openButton");

// Get the chat area element, chat input element, and send button
const chatArea = document.getElementById("chatArea");
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");

// Get the close button
const closeButton = document.getElementById("closeButton");

// Open the chat popup when the user clicks the open button
openButton.addEventListener("click", () => {
  chatPopup.style.display = "block";
});

// Close the chat popup when the user clicks the close button
closeButton.addEventListener("click", () => {
  chatPopup.style.display = "none";
});

// Send a chat message when the user clicks the send button
sendButton.addEventListener("click", () => {
  // Get the user's chat message
  const message = chatInput.value; 
  const newMessage = document.createElement("p");
  
  // Check if the user sent "hi"
  if (message.toLowerCase() === "hi") {
    newMessage.textContent = "Welcome to our channel, how can we help you?";

  } else {
    newMessage.textContent = `You: ${message}`;
  }
    // Add the new chat message to the chat area
  chatArea.appendChild(newMessage);
  
  // Create a new chat message element

});
// Set initial like count to 0
let likeCount = 0;

// Get reference to the like button
const likeButton = document.getElementById("like");

// Add event listener to the like button
likeButton.addEventListener("click", function() {
  // Check if button has already been clicked
  if (!likeButton.disabled) {
    // Increment the like count
    likeCount++;

    // Update the like button text to show the updated count
    likeButton.textContent = `Like (${likeCount})`;

    // Disable the like button
    likeButton.disabled = true;
  }
});