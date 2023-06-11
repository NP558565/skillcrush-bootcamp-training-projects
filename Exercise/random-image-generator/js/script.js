const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

//Declare an async function called getImage.
/*Below the async function, declare a function expression 
called selectRandomImage. Use the images as a parameter.*/

/*In the body of the function, declare a variable called 
randomIndex. In the value, use the Math.floor() method to 
round the number down.*/

/*Inside the Math.floor() method, multiply the Math.random() 
method by the length of the images: Math.floor(Math.random() 
* images.length).*/  

/*In the getImage() async function, call the selectRandomImage() 
function, and pass it images as an argument. Now you’re ready to 
check the data from randomIndex.*/
const getImage = async function () {
    //Inside the function body, declare a variable called res.
    /*In the value of res, use the await keyword with fetch() to enable asynchronous communication between your program and the Imgflip API.*/
    //Provide the fetch() function with the API URL: https://picsum.photos/v2/list?limit=100.
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    //On the next line, declare a variable called images.
    /*In the value of images, parse the data captured in the res variable using the .json(). Hint: Don’t forget to use the await keyword.*/
    const images = await res.json();
    selectRandomImage(images);
};

const selectRandomImage = function (images) {
  const randomIndex = Math.floor(Math.random() * images.length);
/*console.log(randomIndex);*/
const randomImage = images[randomIndex];
  //console.log(randomImage);
displayImage(randomImage);
};

const displayImage = function (randomImage) {
const author = randomImage.author;
const imageAddress = randomImage.download_url;
authorSpan.innerText = author;
img.src = imageAddress;
imgDiv.classList.remove("hide");
};

button.addEventListener("click", function () {
getImage();
});

/*Log out the result of images in the console. Outside the function, make sure to call the getImage() function to see the results.*/
    //console.log(images);

//getImage();

//View the array of 100 image objects in the console.