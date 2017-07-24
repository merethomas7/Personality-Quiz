function random() {
  var beauty=document.getElementById("beautyyoutuber").checked;
  var toy=document.getElementById("toyoutuber").checked;
  var cake=document.getElementById("cakeyoutuber").checked;
  var gaming=document.getElementById("gamingyoutuber").checked;
  var score= 0;

  if(beauty==true){
    score= score+1;
}
  else if (toy==true) {
    score= score+2;
}
  else if (cake==true) {
    score= score+3;
}
  else if (gaming==true) {
    score= score+4;
  }

  var beauty2=document.getElementById("beautyyoutuber2").checked;
  var toy2=document.getElementById("toyoutuber2").checked;
  var cake2=document.getElementById("cakeyoutuber2").checked;
  var gaming2=document.getElementById("gamingyoutuber2").checked;

  if(beauty2==true) {
    score= score+1;
  }

  else if(toy2==true) {
    score= score+2;
  }

  else if(cake2==true) {
    score= score+3
  }

  else if(gaming2==true) {
    score= score+4
  }

if(score<4) {
  document.getElementById("demo").innerHTML="Michelle Phan"
  document.getElementById("youtubepic").src="michellephan.jpg"
}

else if(score<6) {
  document.getElementById("demo").innerHTML="Ryan ToyReview"
  document.getElementById("youtubepic").src="toys.jpg"
}

else if(score<8) {
  document.getElementById("demo").innerHTML="How to Cake it"
  document.getElementById("youtubepic").src="caking.jpg"

}

else if(score<10) {
  document.getElementById("demo").innerHTML="PewdiePie"
  document.getElementById("youtubepic").src="pewdiepielogo.png"

}

}
