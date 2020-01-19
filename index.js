/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(String){
  let str = String.split(":")
  if (parseInt(str[0]) < 12 ){
    return "Good Morning";
  }else if ( parseInt(str[0])>12) {
    return "Goo Afternoon";
  }else{
    return "Good Evening";
  }
}




/* Write your implementation of displayMessage() */
