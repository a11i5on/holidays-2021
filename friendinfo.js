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
data["Eula"] = new Profile("Eula", "05-2012", 9, 7, "Looking back at 2021, we’ve had so many fun adventures together! From adventures around Boston to long urban hikes around SF to Guerneville to jazz night excursions, we always have the most fun plans. I really appreciate that we can plan these super cool experiences together. Moreover, I feel like we’ve only gotten closer in our 1-1 time and appreciate the deep, meaningful conversations we have too. TLDR: I’m looking forward to the adventures we’ll have in 2022."); 
data["Allison"] = new Profile("Allison", "06-2021", 0, 6, "I can’t believe we met in June of THIS YEAR. You’ve quickly become one of my closest friends (both in proximity and emotionally) and I am sososo lucky to have you. Thankyouthankyouthankyou for all of the project sends, Tiktok braincell energy, uncut footies, yummy food, spontaneous coffee plans, mutual hype-ups when our ED brain or BD is wilding out, nights out in Miami or in SF, and all of the other special memories we’ve shared in 2021! Whether I’m working on a particularly tough problem at Dogpatch or just hanging with you in your apartment doing nothing, I always have so much fun. I also appreciate that I’ve been able to feel super close to you so quickly, and that our convos can be meaningful and personal. You’re so inspirational, kind, supportive, beautiful, empathetic, wise, funny, and everything I could ever ask for from a friend. I’m honestly always shocked you’re willing to put up with my constant chaos so much. (TT^TT);;; and aspire to be that kind of friend for you so please lmk how I can best do that."); 
data["Casi"] = new Profile("Casi", "06-2013", 8, 6, "Menthol illness has been really tough this year, but some of my happiest moments have been because of you. I am sososo lucky to have you. Whether we’re doing long-distance or in the same city, I feel just as close to you and that’s something that is truly special. That said, thank you for visiting SF! It was the hands-down best week of 2021 for me – from just cooking around my apartment, sharing my new passion for climbing with you, playing “We’re Not Really Strangers”, to karaoke and yummy foods, it was literally like a dream. I can’t wait until we can spend that kind of continued time together again soon. You’re so inspirational, kind, supportive, beautiful, empathetic, wise, funny, and everything I could ever ask for from a friend. I’m honestly always shocked you’re willing to put up with my constant chaos so much so thanks for being there for me, even when I’m at my most annoying (TT^TT);;; I aspire to be that kind of friend for you so please lmk how I can best do that."); 
data["Alisha"] = new Profile("Alisha", "08-2017", 4, 4, "Looking back at 2021, our calls brought so much happiness into my life. One thing I think is really special about our friendship is that even though we are sadly no longer neighbors in a dorm, we’re still just as close. That said, I’m SUPER hyped to see you in January and kick off the year by seeing you. I’m also excited for what’s to come for both of us in the upcoming year in all aspects – personal and professional."); 
data["Allie"] = new Profile("Allie", "10-2017", 4, 2, "Looking back at 2021, our messages and calls bring so much happiness into my life so thank you for always reaching out. One thing I think is really special about our friendship is that even though we are sadly no longer neighbors in a dorm, we’re still just as close. That said, I’m SUPER hyped to see you in 2022 (Graduation? Or maybe a climbing trip? I also would love to see Cory too~). I’m also excited for what’s to come for both of us in the upcoming year in all aspects – personal and professional."); 
data["Bikram"] = new Profile("Bikram", "07-2017", 0, 5, "Can you believe that we only met this past summer??? I’m so happy that we were able to grow closer so quickly. Whether it’s your birthday party, karaoke, just hanging out with Allison over cocoa, and other shenanigans, thank you for making 2021 so fun for me. I’m also excited for what’s to come for both of us in the upcoming year in all aspects – personal and professional (and for you, who knows…some romantic developments???).");

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

