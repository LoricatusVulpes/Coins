// JavaScript Document
onload = init;

function init(){
	
	var coin1 = new Coin();
	coin1.create();
	var coin2 = new Coin();
	coin2.create();
	var coin3 = new Coin();
	coin3.create();
	var coin4 = new Coin();
	coin4.create();
	var coin5 = new Coin();
	coin5.create();
}

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
	this.destroy = function(){
	}
	
	
}//close the class