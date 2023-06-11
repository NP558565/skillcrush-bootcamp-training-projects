// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
/*Near the top of your script.js file, create two new variables: assignButton and assignedItems. 
The value of assignButton should select the element with the assign class which only appears when the guest list is full. The value of assignedItems should select the element with the  assigned-items class which targets the list that will populate with the guest’s name and their assigned dish.*/
const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  if (guest !== "") {
    addToList(guest);
    updateGuestCount();
    clearInput();
  }
});

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const clearInput = function () {
  guestInput.value = "";
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};
//

/*Below the updateGuestCount function, create a function expression called assignItems. The function doesn’t need any parameters.*/
/*Inside the function body, create a variable called potluckItems to hold an array. Add about a dozen potluck 
elements to the array, like potato salad, hummus, cookies, and fruit.*/
const assignItems = function () {
  const potluckItems = [
    "cheese",
    "crackers",
    "fresh fruit",
    "coleslaw",
    "apple cake",
    "gazpacho",
    "baguette",
    "egg salad",
    "potato salad",
    "summer rolls",
    "hummus",
    "cookies"
  ];
  /*Below the array, create a variable called allGuests to select ALL the list elements inside the unordered list with a class of “guest-list”*/
  const allGuests = document.querySelectorAll(".guest-list li");

  /*Below the allGuests variable, write a for...of loop to loop over the allGuests array using guest as the variable: for (let guest of allGuests).*/
  for (let guest of allGuests) {
    /*Inside the for...of loop, create a variable called randomPotluckIndex. In the value, you’ll generate a number between 0 and the length of 
allGuests to select a random element from the array: Math.floor(Math.random() * potluckItems.length);.*/
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    /*Below the randomPotluckIndex variable, declare a variable called randomPotluckItem. In the value, add the item from the 
potluckItems array at the index position of randomPotluckIndex.*/
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    //Still in the for...of loop, create a variable called listItem. As the value, create a new "li" element.
    let listItem = document.createElement("li");
    //Set the innerText of listItem to a string with the guest name and item the person is bringing
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;

    //On the next code line, write the assignedItems variable and append the listItem variable to it.
    assignedItems.append(listItem);

    potluckItems.splice(randomPotluckIndex, 1);
  }
};

//Below the assignItems function, write an event listener for a click on the assignButton element. Inside the function body, call the assignItems function.
assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
