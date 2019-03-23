// Script for testing cognitive ability
canvas = document.getElementById("cognitive-test");

var Circle1 = document.createElement('li');
Circle1.innerHTML = '<div id="circle-1">HELLO</div>';
canvas.appendChild(Circle1);

randomInt = 0;
function startTest() {
	randomInt = Math.round(Math.random());
	var ctx = canvas.getContext("2d");

	ctx.beginPath();
	ctx.arc(340, 120, 50, 0, 2 * Math.PI);
	if (randomInt == 0) {
		ctx.fillStyle = 'red';		
	} else {
		ctx.fillStyle = 'green';
	}
	ctx.fill();

	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.arc(60, 120, 50, 0, 2 * Math.PI);
	if (randomInt == 0) {
		ctx.fillStyle = 'green';		
	} else {
		ctx.fillStyle = 'red';
	}
	ctx.fill();
}