let item = document.getElementById("image");
item.hidden = true;
function clickme() {
var date = document.getElementById("dateinput").value;
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  let item = document.getElementById("image");
  let header = document.getElementById("top")
  let pictitle = document.getElementById("pictitle")
  let paragraph = document.getElementById("paragraph")
  if(this.readyState === 4 && this.status === 200){
    var obj = JSON.parse(this.responseText);
    pictitle.innerHTML = obj.title;
    paragraph.innerHTML = obj.explanation;
    header.hidden= true;
    item.src = obj.url;
    item.hidden = false;
    pictitle.hidden = false;
   paragraph.hidden = false;
    }
  else if(this.readyState === 4 && this.status !== 200){

   header.innerHTML = "BAD REQUEST";
   header.hidden = false;
   item.hidden = true;
   pictitle.hidden = true;
   paragraph.hidden = true;
  }};



  xhttp.open("GET", "https://api.nasa.gov/planetary/apod?api_key=kZvh1KZRnTg0gh6uXudvm6jk1X2fUHMZEtHL0Qlc&date="+date)
  xhttp.send();
};