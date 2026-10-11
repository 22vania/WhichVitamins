//Pull lists of data from "Function" table
var allFoodNames = getColumn("Vitamin Data for Different Foods", "Food");
var allVitaminData = getColumn("Vitamin Data for Different Foods", "Vitamins");

// Event listener for category dropdown to switch between screens
onEvent("categoryDropdown", "change", function( ) {
  var category = getText("categoryDropdown");
  if (category == "Food") {
    setScreen("FoodScreen");
  } else if ((category == "Drink")) {
    setScreen("DrinkScreen");
  } else {
    setScreen("categoryScreen");
  }
});

// Event listeners for all back buttons to return to category screen
onEvent("back1", "click", function( ) {
  setScreen("categoryScreen");
});
onEvent("back2", "click", function( ) {
  setScreen("categoryScreen");
});
onEvent("back3", "click", function( ) {
  setScreen("categoryScreen");
});
onEvent("back4", "click", function( ) {
  setScreen("categoryScreen");
});

// Event listener to open the search screen
onEvent("searchButton", "click", function( ) {
  setScreen("SearchScreen");
});

// Event listener for search dropdown to trigger search function
onEvent("searchDropdown", "change", function( ) {
  searchByVitamin(getText("searchDropdown"));
});

// Event listeners for specific food items
onEvent("salmon", "click", function() {
  showFoodInfo("Salmon");
});
onEvent("friedChicken", "click", function() {
  showFoodInfo("Fried Chicken");
});
onEvent("hotcocoa", "click", function() {
  showFoodInfo("Hot Chocolate");
});
onEvent("lemonade", "click", function() {
  showFoodInfo("Lemonade");
});

// Function to display the final result screen with given text
function showResultScreen(text) {
  setScreen("ResultScreen");
  setProperty("resultArea", "text", text);
}

// Function to show the vitamin info of a selected food
function showFoodInfo(foodName) {
  for (var i = 0; i < allFoodNames.length; i++) {
    if (allFoodNames[i] == foodName) {
      showResultScreen(allVitaminData[i]);
    }
  }
}

// Function to search for foods that contain a specific vitamin
function searchByVitamin(userSearch) {
  var results = [];
  for (var i = 0; i < allVitaminData.length; i++) {
    if (allVitaminData[i].toLowerCase().includes(userSearch.toLowerCase())) {
      appendItem(results, allFoodNames[i]);
    }
  }
  setText("searchArea", ("Foods with " + userSearch) + ":\n" + results.join("\n"));
}