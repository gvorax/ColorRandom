var h3 = document.querySelector("h3");
var body = document.getElementById("body");
var color1 = document.querySelector(".input1");
var color2 = document.querySelector(".input2");
var random = document.querySelector(".random");
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function color(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value +", " 
	+ color2.value +")";
	h3.textContent = body.style.background +";";
    
    random.style.background="linear-gradient(to right, " 
	+ color1.value +", " 
	+ color2.value +")";
};
color();
function colorrandom() 
{
	color1.value = getRandomColor();
	color2.value = getRandomColor();

	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value +", " 
	+ color2.value +")";
	h3.textContent = body.style.background +";";
    
    random.style.background="linear-gradient(to right, " 
	+ color1.value +", " 
	+ color2.value +")";
}
function setgradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value +", " 
	+ color2.value +")";

	h3.textContent = body.style.background +";"
	random.style.background="linear-gradient(to right, " 
	+ color1.value +", " 
	+ color2.value +")";
}

random.addEventListener("click",colorrandom);
color1.addEventListener("input",setgradient);
color2.addEventListener("input",setgradient);