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

// Initializing data for personalization 
data["Clive"] = new Profile("Chive", "05-2014", 7, 7, "Looking back at 2021, we’ve had so many fun adventures together! I really value that we can vibe together irrespective of context. We can meme around with Eula, or have impromptu calls on one of our commutes, or have deep conversations late at night. So thank you for being a special, rare kind of friend. 😊I’m excited for what’s to come for both of us in the upcoming year in all aspects – careerwise (who will get to be a people manager first? The race is on l m a o), travelwise (Napa or Filoli part 2???), relationshipswise (new friends and who knows…new love for you?), and everything.");
data["Emily"] = new Profile("Emily", "09-2012", 9, 3, "In particular, thank you for being the truest friend despite everything: physical distance, job struggles, personal health struggles, both of our mental health struggles – especially when I get super tilted and agitated – and in general, day-to-day chaos. It’s rare to find someone so committed to their friends and I can only hope that I’m half as good of a friend to you as you are to me.\n Although the past year has been tumultuous to say the least, I’m really excited to see what you’ll accomplish in 2022. I can already hear your voice saying “Allison I won’t do anything noteworthy” or something along those lines, but 👏this👏is👏not👏the👏year👏 of self-deprecation!!! With your new team and a fresh start, I am SURE you will knock the ball out of the park. But in the meantime, I hope that the end of year allows for some MUCH deserved destressing and quality time with your parents and Amanda (pls say hi to them for me!). Stay warm!"); 
data["Eula"] = new Profile("Eula", "05-2012", 9, 7, "Looking back at 2021, we’ve had so many fun adventures together! From adventures around Boston to long urban hikes around SF to Guerneville to jazz night excursions, we always have the most fun plans. I really appreciate that we can plan these super cool experiences together. Moreover, I feel like we’ve only gotten closer in our 1-1 time and appreciate the deep, meaningful conversations we have too. TLDR: I’m looking forward to the adventures we’ll have in 2022."); 
data["Allison"] = new Profile("Allison", "06-2021", 0, 6, "I can’t believe we met in June of THIS YEAR. You’ve quickly become one of my closest friends (both in proximity and emotionally) and I am sososo lucky to have you. Thankyouthankyouthankyou for all of the project sends, Tiktok braincell energy, uncut footies, yummy food, spontaneous coffee plans, mutual hype-ups when our ED brain or BD is wilding out, nights out in Miami or in SF, and all of the other special memories we’ve shared in 2021! Whether I’m working on a particularly tough problem at Dogpatch or just hanging with you in your apartment doing nothing, I always have so much fun. I also appreciate that I’ve been able to feel super close to you so quickly, and that our convos can be meaningful and personal. You’re so inspirational, kind, supportive, beautiful, empathetic, wise, funny, and everything I could ever ask for from a friend. I’m honestly always shocked you’re willing to put up with my constant chaos so much. (TT^TT);;; and aspire to be that kind of friend for you so please lmk how I can best do that."); 
data["Casi"] = new Profile("Casi", "06-2013", 8, 6, "Menthol illness has been really tough this year, but some of my happiest moments have been because of you. I am sososo lucky to have you. Whether we’re doing long-distance or in the same city, I feel just as close to you and that’s something that is truly special. That said, thank you for visiting SF! It was the hands-down best week of 2021 for me – from just cooking around my apartment, sharing my new passion for climbing with you, playing “We’re Not Really Strangers”, to karaoke and yummy foods, it was literally like a dream. I can’t wait until we can spend that kind of continued time together again soon. You’re so inspirational, kind, supportive, beautiful, empathetic, wise, funny, and everything I could ever ask for from a friend. I’m honestly always shocked you’re willing to put up with my constant chaos so much so thanks for being there for me, even when I’m at my most annoying (TT^TT);;; I aspire to be that kind of friend for you so please lmk how I can best do that."); 
data["Alisha"] = new Profile("Alisha", "08-2017", 4, 4, "Looking back at 2021, our calls brought so much happiness into my life. One thing I think is really special about our friendship is that even though we are sadly no longer neighbors in a dorm, we’re still just as close. That said, I’m SUPER hyped to see you in January and kick off the year by seeing you. I’m also excited for what’s to come for both of us in the upcoming year in all aspects – personal and professional."); 
data["Allie"] = new Profile("Allie", "10-2017", 4, 2, "Looking back at 2021, our messages and calls bring so much happiness into my life so thank you for always reaching out. One thing I think is really special about our friendship is that even though we are sadly no longer neighbors in a dorm, we’re still just as close. That said, I’m SUPER hyped to see you in 2022 (Graduation? Or maybe a climbing trip? I also would love to see Cory too~). I’m also excited for what’s to come for both of us in the upcoming year in all aspects – personal and professional."); 
data["Bikram"] = new Profile("Bikram", "07-2021", 0, 5, "Can you believe that we only met this past summer??? I’m so happy that we were able to grow closer so quickly. Whether it’s your birthday party, karaoke, just hanging out with Allison over cocoa, and other shenanigans, thank you for making 2021 so fun for me. I’m also excited for what’s to come for both of us in the upcoming year in all aspects – personal and professional (and for you, who knows…some romantic developments???).");
data["Vinny"] = new Profile("Vinny", "12-2016", 5, 0, "I’ve been particularly thankful for you this year. Regardless of whether I’m on the West Coast or the East Coast, you’ve constantly been there for me. Our random calls when I’m out running errands bring me so much joy, and I feel like we can still talk about ANYTHING despite having to deal with long-distance best friendship. Cape Cod was also SO fun (despite the stupid hurricane that we had to outdrive) and I’m excited for the next time we can go somewhere together. You’re so inspirational, kind, supportive, empathetic, wise, funny, and everything I could ever ask for from a friend. I’m honestly always shocked you’re willing to put up with me so much. (TT^TT);;; and aspire to be that kind of friend for you so please lmk how I can best do that. ");
data["Akshaya"] = new Profile("Akshaya", "12-2016", 5, 0, "Looking back at 2021, our calls brought so much happiness into my life. One thing I think is really special about our friendship is that even though we are sadly no longer neighbors in a dorm, we’re still just as close. That said, I’m SUPER hyped to see you at Graduation. I’m also excited for what’s to come for both of us in the upcoming year in all aspects – personal and professional. ");  
data["Ying-ke"] = new Profile("Ying-ke", "08-2016", 5, 4, "Thankyouthankyouthankyou for being the best literal fam I could ask for. While I really miss that we can’t just spontaneously karaoke together or eat dinner all the time, I still feel really close to you. I can’t wait til we can meet up again (if Omicron doesn’t cancel graduation gg) and do all of that though! I’m honestly always shocked you’re willing to put up with me so much. (TT^TT);;; and aspire to be that kind of friend for you so please lmk how I can best do that.");
data["Will"] = new Profile("Gan", "05-2019", 2, 7, "In particular, I’m sososo thankful that you actually reached out when you moved here to SF. Since then I’ve had so much fun climbing with you (and chuffing off overhung V2s lmao), grabbing food, watching movies, among other things. Thank you for also listening to me ramble – I feel like I definitely talk AT you a lot of the time so please let me know if it’s ever a lot! But all in all, 2021 has been a lovely year largely in thanks to you! I’m really excited to see you send hard in 2022 (both literally and figuratively) :D");  
data["Issen"] = new Profile("Issen", "01-2018", 3, 11, "In particular, I’m sososo thankful that we’ve stayed so close after getting booted off campus! While I’ll always miss our daily 7am brekkies in the d-hall, I still feel just as close, if not closer to you, now. Adulthood has not been kind to either of us but there have been really lovely moments in 2021 largely in thanks to you. Our spontaneous chats and calls bring me so much joy, as do our rare but AMAZING IRL hangouts. One of my biggest highlights this year was seeing you at the Illustrators award ceremony (thank you again for letting me crash!). I’m also really hyped to kick off 2022 with you visiting SF: I really can’t emphasize how hyped I am!!! You’re so inspirational, kind, supportive, empathetic, wise, funny, and everything I could ever ask for from a friend. I’m honestly always shocked you’re willing to put up with me so much. (TT^TT);;; and aspire to be that kind of friend for you so please lmk how I can best do that."); 
data["Cassia"] = new Profile("Cassie", "12-2017", 4, 0, "In particular, I’m sososo thankful that we’ve stayed so close after getting booted off campus! While I’ll always miss our long runs around Fresh Pond, I still feel just as close, if not closer to you, now. Our spontaneous chats and calls bring me so much joy. I’m also really hyped to see you for graduation in May!!! You’re so strong, inspirational, kind, supportive, empathetic, wise, funny, and everything I could ever ask for from a friend. I’m honestly always shocked you’re willing to put up with me so much. (TT^TT);;; and aspire to be that kind of friend for you so please lmk how I can best do that."); 
data["Sophia"] = new Profile("Soapy", "01-2013", 8, 11, "In particular, I’m sososo thankful that we’ve gotten to be so close after our LHS days! While meming around the LHS library was fun too, I feel like our friendship has evolved into something even more genuine and special through college and past it. This year has not been kind to me lmao but there have been really lovely moments in 2021 largely in thanks to you. Our spontaneous chats and calls bring me so much joy, as do our rare but AMAZING IRL hangouts (GURNVILLLEEEE also climbing hehe). You’re so inspirational, kind, supportive, empathetic, wise, funny, and everything I could ever ask for from a friend. I’m honestly always shocked you’re willing to put up with me so much. (TT^TT);;; and aspire to be that kind of friend for you so please lmk how I can best do that."); 
data["Rachel"] = new Profile("Rachel", "03-2017", 4, 9, "In particular, I’m sososo thankful that we’ve stayed so close after getting booted off campus! While I’ll always miss our IRL hangouts in the Quad or in your dorm, I still feel just as close, if not closer to you, now. Our spontaneous chats and calls bring me so much joy – I still remember when you randomly called me with Ethan when Kodai and I were watching Free Solo, lol... I’m also really hyped to see you for graduation in May!!! You’re so strong, inspirational, kind, supportive, empathetic, wise, funny, and everything I could ever ask for from a friend. I’m honestly always shocked you’re willing to put up with me so much. (TT^TT);;; and aspire to be that kind of friend for you so please lmk how I can best do that."); 
data["Grace"] = new Profile("GYZhang", "11-2017", 4, 1, "Thankyouthankyouthankyou for all of the spontaneous long calls and fun chats we’ve had since getting booted off campus! While I’ll always miss scootering around campus together or pestering you in your OH, I still feel just as close, if not closer to you, now. And honestly, May 2022 isn’t so far away anymore: I’m also really hyped to see you for graduation!!! You’re so strong, inspirational, kind, supportive, empathetic, wise, funny, and everything I could ever ask for from a friend. I’m honestly always shocked you’re willing to put up with me so much. (TT^TT);;; and aspire to be that kind of friend for you so please lmk how I can best do that."); 
data["Ashley"] = new Profile("Ashley", "03-2018", 3, 9, "Thankyouthankyouthankyou for all of the spontaneous long calls and fun chats we’ve had since getting booted off campus! While I’ll always miss our late night (Or morning? Depending on who you ask…) conversations in our common room, or getting pho with Vivs and Ying-ke together, I still feel just as close, if not closer to you, now. And honestly, May 2022 isn’t so far away anymore: I’m also really hyped to see you for graduation!!! You’re so strong, inspirational, kind, supportive, empathetic, wise, funny, and everything I could ever ask for from a friend. I’m honestly always shocked you’re willing to put up with me so much. (TT^TT);;; and aspire to be that kind of friend for you so please lmk how I can best do that."); 
data["Terri"] = new Profile("Terru", "09-2003", 18, 3, "While it’s been a hot second since we’ve lived in the same town, I still feel just as close, if not closer to you, now. But with May just around the corner, I’m so excited to see you (and hopefully Joe)!!! You’re so strong, inspirational, kind, supportive, empathetic, wise, funny, and everything I could ever ask for from a friend. I’m honestly always shocked you’re willing to put up with me so much. (TT^TT);;; and aspire to be that kind of friend for you so please lmk how I can best do that. And please send my regards to Evan, George, and of course, your parents in the meantime."); 
data["Henry"] = new Profile("Henry", "05-2021", 0, 7, "In particular, I’m thankful for our 1-1 coffees at Philz. I feel like we’ve been able to connect really quickly despite not knowing each other for that long, and it’s always a lovely break from work to take a walk and talk about life with you. So thanks and I hope that in 2022, we can hang out even more (and maybe catch the Symphony..?). :)"); 
data["Anthony"] = new Profile("Anthony", "05-2015", 6, 7, "In particular, I’m thankful that we’ve stayed close despite me moving out to SF. Thank you for letting me be a part of your father’s special day in July: it was also so much fun hanging out with you and Thomas again. I know I tend to flit in and out of your life sometimes, especially when I am struggling through things here on this side of the country, so thank you for always putting up with me. I hope that in 2022, we can see each other at some point when I’m back in Boston!"); 
data["Chris"] = new Profile("Chritter", "04-2001", 20, 8, "2021 has been a low-key shitfest for both of us in terms of mental health, but through it all I’ve been really thankful to have you around. Thanks for listening to me rant about our parents over iMessage, climbing with me back in August, and in general being around for me. I’m sure 2022 will have its own challenges but I am confident that you’ll knock the next year out of the park with a little effort, goal setting, and time. Always here if you want to talk, lose a few games of ARAM, or just meme :)"); 
data["Enoch"] = new Profile("Enoch", "02-2021", 0, 10, "You got an IRL card this is just so you can see the STRUGGLE hahaha"); 

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
		storage.setItem("name", data[name].name); 
		storage.setItem("time_elapsed_yrs", data[name].time_elapsed_yrs);
		storage.setItem("time_elapsed_mos", data[name].time_elapsed_mos); 
		storage.setItem("msg", data[name].msg); 
		window.location.href = "card.html";
	} 
}

