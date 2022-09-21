// if ticket numbers is less then 100, pwr ticket price :100
// 
// 01
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
