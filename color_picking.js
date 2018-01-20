
var isHard=true;
var colors=generateColors(6);
var pickedcolor=pickcolor();
var squares=document.querySelectorAll(".square");
var displayedcolor=document.querySelector("span");
var resultDisplay=document.querySelector("#space");
var h1=document.querySelector("h1");
var resetButton=document.querySelector(".reset");
var easyButton=document.querySelector("#easy");
var hardButton=document.querySelector("#hard");
var scoreDisplay=document.querySelector("#scoreDisplay");
easyButton.addEventListener("click",function(){
	isHard=false;
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	resetButton.classList.remove("selected");
	colors=generateColors(3);
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		squares[i].style.background=colors[i];
		else
		squares[i].style.background="#232323";	
	}
	pickedcolor=pickcolor();
	displayedcolor.textContent=pickedcolor;
	resetButton.textContent="NEW GAME";
	resultDisplay.textContent="";
	h1.style.background="steelblue";
});
hardButton.addEventListener("click",function(){
	isHard=true;
	easyButton.classList.remove("selected");
	resetButton.classList.remove("selected");
	hardButton.classList.add("selected");
	colors=generateColors(6);
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=colors[i];
	}
	pickedcolor=pickcolor();
	displayedcolor.textContent=pickedcolor;
	resetButton.textContent="NEW GAME";
	resultDisplay.textContent="";
	h1.style.background="steelblue";
});
hardButton.addEventListener("click",function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
});
resetButton.addEventListener("click",function(){
	easyButton.classList.remove("selected");
	hardButton.classList.remove("selected");
	resetButton.classList.add("selected");
	if(isHard===true)
	colors=generateColors(6);
	else
	colors=generateColors(3);
	pickedcolor=pickcolor();
	displayedcolor.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=colors[i];
	}
	h1.style.background="steelblue";
	resultDisplay.textContent="";
	resetButton.textContent="NEW GAME"
});
for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.background;
		if(clickedColor===pickedcolor)
		{
			resultDisplay.textContent="Correct";
			changeColor(pickedcolor);
			h1.style.background=clickedColor;
			resetButton.textContent="Play Again?"	//changeColor(pickedcolor);
		}
		else
		{
			transition: "background 2.0s";
			this.style.background="#232323";
			resultDisplay.textContent="Try Again";

		}
			//this.style.background="#232323";
	});
}

displayedcolor.textContent=pickedcolor;
function changeColor(color){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=color;
	}
}


function generateColors(num)
{
	var arr=[];
	for(var i=0;i<num;i++){
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		arr[i]="rgb("+r+", "+g+", "+b+")";
	}
	return arr;

}
function pickcolor()
{

	return colors[Math.floor(Math.random()*colors.length)];
}