
 var r1 =Math.floor( Math.random()*6)+1;
  var r2 =Math.floor( Math.random()*6)+1;

  var img1 = "images/dice" + r1 +".png";
  var img2 = "images/dice" + r2 +".png";

  var image1 = document.querySelectorAll("img")[0];
   image1.setAttribute("src", img1);

 var image2 = document.querySelectorAll("img")[1];
 image2.setAttribute("src",img2);




  if(r1===r2)
  document.querySelector("h1").innerHTML="Draw!";
  else if (r1>r2) {
     document.querySelector("h1").innerHTML="⛳Player1 won⛳";
  }
  else {
       document.querySelector("h1").innerHTML="⛳Player2 won⛳";
  }




















     // document.setAttribute("img[0]","images\dice1.png");

    //document.getElementsByClassName("img1").setAttribute("src", "images/dice1.png");
