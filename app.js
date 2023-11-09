// Grab Elements
const theInput = document.querySelector(".input");
const iconError = document.querySelector(".icon-error");
const emailInput = document.querySelector("#email");
const subscribeForm = document.querySelector(".subscribe");
const subscribeButton = document.querySelector(".subscribe button");

// Error displayed only once ... no rerendering
let showErrorExecuteStatus = false;

// Create Element
const errorMessage = document.createElement("p");
const errorText = document.createTextNode("Please provide a valid email");

// show error
const showError = () => {
  if (!showErrorExecuteStatus) {
    // Add Error Class
    errorMessage.classList.add("errorText");

    // Append Text to Error Message
    errorMessage.appendChild(errorText);

    // Insert message into DOM
    errorMessage.appendChild(errorText);

    // Add style for visibility
    iconError.style.display = "block";
    errorMessage.style.display = "block";

    // Add new element to the DOM
    theInput.insertAdjacentElement("beforeend", errorMessage);

    showErrorExecuteStatus = true;

    // Fixing button height when there is error
    subscribeButton.style.height = "67%";
  }
};

// remove error
const removeError = () => {
  // Remove style for visibility
  iconError.style.display = "none";
  errorMessage.style.display = "none";

  // Fixing button height when there is no error
  subscribeButton.style.height = "100%";
};

// validate email
const validateEmail = (e) => {
  e.preventDefault();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const email = emailInput.value.trim();

  if (!emailPattern.test(email)) {
    showError();
    console.log(emailPattern.test(email));
    console.log(email);
  } else {
    removeError();
    console.log("validated");
  }
};

subscribeForm.addEventListener("submit", validateEmail);
