// JavaScript Document
onload = init;
// create an array to keep track of items currently in play
var coin_array = new Array();

function init(){
	for (var i=0; i<20;i++){
	var anothercoin = new Coin();
	anothercoin.create();
	//put that new coin in the array
	coin_array.push(anothercoin);
	//when the new coin is clicked, use it's built in destroy function, passing the event 
	anothercoin.item_on_page.onclick = function(e){
		anothercoin.destroy(e);
	}//end event handler
	}//close for loop
}//close init

// let's make a class blueprint for each coin we make
function Coin(){
	this.x;//starts empty, will keep track of each coin's left/right position on stage.
	this.y;//starts empty, will keep track of coin's up-down
	
	this.item_on_page;
	// function does lots of things when a coin gets created 
	this.create = function(){
		//make a section element in the HTML, Store it into the item-on page we set up above
		this.item_on_page = document.createElement("section");
		//store a random X/Y position different for each coin
		this.x = Math.floor(Math.random()*500);
		this.y = Math.floor(Math.random()*300);
		//use those y coordinates in the css to position the coins:
		this.item_on_page.style.left = this.x + "px";
		this.item_on_page.style.top = this.y + "px";
		//attach the item to our HTML hierarchy as a child of the body
		document.getElementsByTagName("body")[0].appendChild(this.item_on_page);
	}
	
	//does many things when coin goes away
	this.destroy = function(e){
		//console.log("dis stuff be workin");
		document.getElementsByTagName("body")[0].removeChild(e.target);
		//figure out coin's position in array
		var this_coins_index_num = coin_array.indexOf(this);
		//splice it out of the array
		coin_array.splice(this_coins_index_num,1);
		//console.log(coin_array.length);
	}
	
	
}//close the class