// Your JS code here
//Write a variable called subTypeElement and select the element id for the Subscription drop-down list. You'll need to open up the index.html file to discover the id name.
var subTypeElement = document.querySelector("#subscription");
//Write a variable called subDurationElement and select the element id for the Duration drop-down list.
var subDurationElement = document.querySelector("#months");
//Write a variable called result to target the "result" class. This is where the cost of the subscription will appear.
var result = document.querySelector(".result");
//Write a variable called subType and give it a value of "basic". This is the default value for the Subscription drop-down list.
var subType = "basic";
//Write a variable called subDuration and give it a value of 1 (make sure it's a number data type). This is the default value for the Duration drop-down list.
var subDuration = 1;
//Create an event listener for the subTypeElement variable. You'll want to listen for a change event. In the callback function, use e as the parameter.
subTypeElement.addEventListener("change", function (e) {
  //In the body of the callback function, reassign the value of subType to the value of the target: subType = e.target.value. The target of the event is the option element, and you're grabbing its value (look at the HTML for more info).
  subType = e.target.value;
  // console.log(subType);
  updateSubscriptionDiv();
});
//Create a new event listener for the subDurationElement variable that will listen for a change event. Reassign the value of subDuration to the target value. To ensure the value is a number data type, wrap the reassigned value with Number().
subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  // console.log(subDuration);
  updateSubscriptionDiv();
});
//Below your event listeners, declare a variable called updateSubscriptionDiv for a function expression.
var updateSubscriptionDiv = function () {
  //In the function body, create a variable called monthlyCost and give it a value of 5. This is the monthly cost for a basic subscription, which is selected by default.
  var monthlyCost = 5; // for basic plan
  //Create a conditional block that first checks if the variable subType is equal to "standard". If it's equal to "standard", reassign the value of monthlyCost to 7. Next, check if the variable subType value is equal to "premium", and then reassign the monthlyCost value to 10.
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  //Below the conditional block (but still in the function body), create a variable called total whose value is the product of subDuration multiplied by monthlyCost.
  var total = subDuration * monthlyCost;
  //Below the total variable, change the innerText of the result variable. In the value, create a message that will say something like "You have chosen a subDuration month subType plan for $total." Note: You'll use template literal placeholders where the variable names are in the example message.
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};
