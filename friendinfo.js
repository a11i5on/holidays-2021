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

data["Clive"] = new Profile("Clive", "05-2014", 7, 7, "Lorem ipsum");
data["Emily"] = new Profile("Emily", "09-2012", 9, 3, "Emily copy"); 

function checkEntry(){
	var storage = localStorage; 
	var name = document.getElementById("name").value; 
	var pwd = document.getElementById("pwd").value;

	storage.setItem("name", name); 
	storage.setItem("pwd", pwd); 
	storage.setItem("time_elapsed_yrs", data[name].time_elapsed_yrs);
	storage.setItem("time_elapsed_mos", data[name].time_elapsed_mos); 
	storage.setItem("msg", data[name].msg); 
	window.location.href = "index.html"; 
}

