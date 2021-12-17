window.sr = ScrollReveal({ reset: true });
sr.reveal('.demo-card', { duration: 800 });
sr.reveal('.ending', { duration: 800 });

var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});

document.getElementById("holidayHeader").innerHTML = "Happy Holidays, " + localStorage.getItem("name") + "!";
document.getElementById("personalizedMsg").innerHTML = localStorage.getItem("msg");

var img = document.createElement("img");
img.className = 'lazy'; 
img.style.cssText = "width:90%;display:block;margin-left:auto;margin-right:auto;width: 50%;margin-bottom:1rem;"; 
img.src = "photos/friends/" + localStorage.name + ".jpg";

var div = document.getElementById("friendPhoto");
div.appendChild(img);