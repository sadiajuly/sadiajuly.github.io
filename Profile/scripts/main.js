var myImage=document.querySelector("img");
myImage.onclick=function(){
  var mySrc=myImage.getAttribute("src");
  if(mySrc==="images/sadia.jpg" ){
  myImage.setAttribute('src',"images/sadia1.jpg");
}
else if(mySrc==="images/sadia1.jpg" ){
    myImage.setAttribute('src',"images/sadia2.jpg");
  }
  else if(mySrc==="images/sadia2.jpg" ){
    myImage.setAttribute('src',"images/sadia4.jpg");
  }  
  else
  myImage.setAttribute('src',"images/sadia.jpg");
}

var myButton = document.getElementById("change");
var myHeading = document.querySelector("h2");
if(localStorage.getItem('name')){
    setUserName();
}
else{
  var storedName = localStorage.getItem('name');
  myHeading.textContent = "Welcome " +storedName;
}
function setUserName(){
     var myName = prompt('Please enter your name:');
     localStorage.setItem('name',myName);
     myHeading.textContent = "Welcome " +myName;
}

myButton.onclick =function() {
  setUserName();
}