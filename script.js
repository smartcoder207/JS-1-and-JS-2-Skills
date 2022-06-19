// You will use this .js file to write your four coding challenges

// "Beginning of 1st question: BasketBall score"
function totalBasketBallScore(freeThrows, midRange, threePointers){
  if(isNan(freeThrows) || isNan(midRange) || isNan(threePointers))
  {
    console.log("All the Entries Must be Numbers")
  }
  else{
      score = freeThrows + (midRange * 2) + (threePointers *3);
      return score;
  }
}
console.log("totalBasketBallScore(%d,%d,%d = %d",1,1,1,totalBasketBallScore(1,1,1));

// "End of Basketball Score"

// "Coding Challenge #2: Computer Store"
function itemPrice(item) {
      if(typeof (item) === 'string') {
      switch (item) {
      case "computer":
      console.log("$500"); break; 
      case "mouse":
      console.log("$10"); break; 
      case "tablet":
      console.log("$250"); break;        
      case "case":
      console.log("$25"); break;           
      case "router":
      console.log("$100"); break;
      default:
      console.log("This item is not available in the store");
            }
        }
        else {
            console.log("All entries must be of type string");
        }
    }

    itemPrice("computer");
    itemPrice("case");
    itemPrice("computer123");
    itemPrice(123);
    itemPrice("123");

// "Coding Challenge #3: What’s for dinner?"
function randomRestaurant(numOfRestaurants) {
const restraunts = ["Applebees","Panera Bread","Popeyes","Chopt","Chick-fil-A","Cheesecake Factory","Five Guys"];
const randomRestaurantList = [];
for (var i = 0; i < numOfRestaurants; i++) {
const randomIndex = Math.floor(Math.random() * restraunts.length + 1);
randomRestaurantList.push(restraunts(randomIndex - 1));
}
return randomRestaurantList;
}
const randomRestaurantList = randomRestaurant(3);
console.log(randomRestaurantList);

// "Coding Challenge #4: Leap Year"
function isLeapYear(Year){
  return(year % 100 ===0) ? (year % 400 === 0 ) : (year % 4 === 0);
}
console.log(isLeapYear(2016));
console.log(isLeapYear(2000));
console.log(isLeapYear(1700));
console.log(isLeapYear(1800));
console.log(isLeapYear(1900));
  
// Make sure to check that each of your challenge functions are working as expected by using console.log() statements and checking the output against what you would expect.