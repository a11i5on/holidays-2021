class Profile {
  constructor(name, pwd, time_elapsed_yrs, time_elapsed_mos, msg) {
    this.name = name;
    this.pwd = pwd;
    this.time_elapsed_yrs = time_elapsed_yrs; 
    this.time_elapsed_mos = time_elapsed_mos;
    this.msg = msg; 
  }
}

var data = {}

data["Clive"] = new Profile("Clive", "05-2014", 7, 7, "Looking back at 2021, we’ve had so many fun adventures together! I really value that we can vibe together irrespective of context. We can meme around with Eula, or have impromptu calls on one of our commutes, or have deep conversations late at night. So thank you for being a special, rare kind of friend. 😊I’m excited for what’s to come for both of us in the upcoming year in all aspects – careerwise (who will get to be a people manager first? The race is on l m a o), travelwise (Napa or Filoli part 2???), relationshipswise (new friends and who knows…new love for you?), and everything.");
data["Emily"] = new Profile("Emily", "09-2012", 9, 3, "In particular, thank you for being the truest friend despite everything: physical distance, job struggles, personal health struggles, both of our mental health struggles – especially when I get super tilted and agitated – and in general, day-to-day chaos. It’s rare to find someone so committed to their friends and I can only hope that I’m half as good of a friend to you as you are to me.\n Although the past year has been tumultuous to say the least, I’m really excited to see what you’ll accomplish in 2022. I can already hear your voice saying “Allison I won’t do anything noteworthy” or something along those lines, but 👏this👏is👏not👏the👏year👏 of self-deprecation!!! With your new team and a fresh start, I am SURE you will knock the ball out of the park. But in the meantime, I hope that the end of year allows for some MUCH deserved destressing and quality time with your parents and Amanda (pls say hi to them for me!). Stay warm!"); 

function checkEntry(){
	var storage = localStorage; 
	var name = document.getElementById("name").value; 
	var pwd = document.getElementById("pwd").value;

	// Form validation 
	if (!(name in data)) { 
		alert("Incorrect name: please try again.");
	} 
	else if (pwd != data[name].pwd) {
		console.log(pwd); 
		console.log(data[name]); 
		alert("Incorrect password: please ensure mm-yyyy string format."); 
	} 
	else {
		storage.setItem("name", name); 
		storage.setItem("time_elapsed_yrs", data[name].time_elapsed_yrs);
		storage.setItem("time_elapsed_mos", data[name].time_elapsed_mos); 
		storage.setItem("msg", data[name].msg); 
		window.location.href = "card.html";
	} 
}

