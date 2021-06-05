var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;
var feedFood;
var feedTime = 0;



//create feed and lastFed variable here
var feed;
var lastFed;


function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //create feed the dog button here
    feedFood = createButton("Feed Food");
    feedFood.position(700,95);
    feedFood.mousePressed(feedDog);
    

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  var title = createElement('h3');
  title.position(550,75)
  title.html("Last Fed : 12AM");

}

function draw() {
  background(46,139,87);
  foodObj.display();



  drawSprites();
}

  //write code to read fedtime value from the database 
  function getTime(){
    var feedTimeRef = database.ref('feedTime').on("value",function(data){
        feedTime = data.val();


      })
    }

 //write code to display text lastFed time here

  if(lastFed>=12){
    
      
    }else if(lastFed = 0){
     text("Last Fed : 12AM",350,30);
          
}


        
        
//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);
  foodS--;
  database.ref('/').update({
    Food:foodS
  })




  //write code here to update food stock and last fed time

}

//function to add food in stock
function addFoods(){
  dog.addImage(sadDog);
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
