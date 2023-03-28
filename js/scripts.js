//UI logic
function handleForm(event) {
  event.preventDefault();
  let userSelectionsArray = document.querySelectorAll("input[name=list-item]:checked");
  const newArray = [];
  userSelectionsArray.forEach(function(element) {
    newArray.push(element.value);
  });
    newArray.sort();
    //userSelectionsArray.toUpperCase();
  const resultsHeading = document.createElement("h2");
  const resultsList = document.createElement("ul");
  resultsHeading.append("Here is your alphabatized list");
  document.body.append(resultsHeading);
  document.body.append(resultsList);
  newArray.forEach(function(element) {
    //used sort() to put userSelectionArray in alph order and named newArray, still not working?
    const returnList = document.createElement("li");
    returnList.append(element);
    document.body.append(returnList);
  });
}
//once alphabatuse set form class to hidden with eventListener for submit




window.addEventListener("load", function() {
  document.querySelector("form#grocery_list").addEventListener("submit", handleForm);
});



