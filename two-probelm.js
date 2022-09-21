// problem 01
function radianToDegree()
{
    let data = document.getElementById("value").value;
    data = parseInt(data)

    if(isNaN(data)) 
              {
             alert("Please enter value");
              }
  else{
  let degree = data * (180 / Math.PI); 
  degree = degree.toFixed(2)
   alert("Converted value into degree : "+degree+"°");
   }
}




// problem 2

// JavaScript to illustrate endsWith() function
function isJavaScriptFile() {

	// Original string
	const string = ['app.js' ,'js.png', 'image.js.png', 'index.js'];

	// Finding the search string in the
	// given string
	const value = string.endsWith('index.js');
	document.write(value);
}
isJavaScriptFile();

