//  create a variable for clock and hex-color and link to html
var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');
/*make a function that lists the date as a variable.
Then store that variable into 3 different variables marking
hours,minutes, and seconds.*/
function hexClock() {
	var time = new Date(); 
// using modulo operator to convert 24 hour clock to 12 hour clock.
	var hours = (time.getHours() %12).toString();     
	var minutes = time.getMinutes().toString();  
	var seconds = time.getSeconds().toString();
// create and if within the function to add a zero for when the var goes below 2
	if(hours.length < 2){
		hours = '0' + hours;
	}

	if(minutes.length < 2){
		minutes ='0' + minutes;
	}

	if(seconds.length < 2){
		seconds='0' + seconds;
	}
// string together the clock in one variable with time variables
	var clockStr = hours + ' : ' + minutes + ' : ' + seconds;
// do the same with the hexColor variable
	var hexColorStr = '#' + hours + minutes + seconds;
//convert the text content within h1id"clock" and pid"hexColor" to the Strings just made.
	clock.textContent = clockStr;
	hexColor.textContent = hexColorStr;
//use the css style in JS to make background color into the hexColorStr
	document.body.style.backgroundColor = hexColorStr
	
}
/*running the hexClock function once to not give a delay in page and set
interval to keep running function every second*/
hexClock();
setInterval(hexClock,1000);