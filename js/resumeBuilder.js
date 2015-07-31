/*
This is empty on purpose! Your code to build the resume will go here.
 */
var replaceStr = "%data%";

 var bio = {
 	name : "Dylan Dannenhauer",
 	role : "Computer Scientist",
 	contacts : {
 		mobile: "610-573-3030",
 		email: "dylan.dannenhauer@gmail.com",
 		github: "thenewkid",
 		twitter: "N/A",
 		location: "Ogden, Utah"
 	},
 	welcomeMessage: "The Dylan Dannenhauer Portfolio (You're Welcome)!",
 	skills: ["OOP", "OOD", "Java", "JavaEE","ORM's", "Python", "HTML", "CSS", "JavaScript", "RWD"],
 	biopic: "https://scontent-sjc2-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/11825900_1612773222295725_5132939999633957014_n.jpg?oh=2325092d14f57a4db086dbd2b12a7d4c&oe=564B002C",
 	display: function() {
 		var contactList = "topContacts";
 		var headerElement = "header";
 		var skillsList = "skills";

 		var contacts = this.contacts;

 		preAdd(headerElement, HTMLheaderRole, this.role)
 		preAdd(headerElement,HTMLheaderName,this.name);

 		add(contactList, HTMLmobile, contacts.mobile);
 		add(contactList, HTMLemail, contacts.email);
 		add(contactList, HTMLtwitter, contacts.twitter);
 		add(contactList, HTMLgithub, contacts.github);
 		add(contactList, HTMLlocation, contacts.location);

 		add(headerElement, HTMLbioPic, this.biopic);
 		add(headerElement, HTMLwelcomeMsg, this.welcomeMessage);
 		add(headerElement,HTMLskillsStart,"");

 		for (var i = 0; i < this.skills.length; i++) {
 			add(skillsList, HTMLskills, this.skills[i]);
 		}
 		
 	}
 }

 var education = {
 	schools: [
 		cso("Cook Systems FastTrack'D", "Memphis, TN", "N/A", ["JavaEE"], "April 11/2015 - June 6/2015", "http://www.cooksys.com/fasttrackd"),
 		cso("Highland High School", "Ewing, MO", "High School Diploma", ["General"], "August 2006 - May 2010", "http://highlandhs.lewis.k12.mo.us")
 	],
 	onlineCourses: [
 		coco("Intro to Programming Methodology", "Stanford Engineering Everywhere", "2013","https://see.stanford.edu"),
 		coco("Front-End-Nanodegree", "Udacity", "2015", "https://www.udacity.com/nanodegree"),
 		coco("Full-Stack-Nanodegree", "Udacity", "2015", "https://www.udacity.com/nanodegree")
 	],
 	display: function() {
 		add("education", HTMLschoolStart, "");
 		for (var j = 0; j < this.schools.length; j++) {
 			var schoolLink = replacify(HTMLschoolName, this.schools[j].name) + replacify(HTMLschoolDegree, this.schools[j].degree);
 			add("ee",schoolLink, "");

 			add("ee", HTMLschoolDates, this.schools[j].dates);
 			add("ee", HTMLschoolLocation, this.schools[j].location);

 			var htmlString = this.schools[j].majors.join(",");
 			add("ee", HTMLschoolMajor, htmlString);
 		}
 		add("education", HTMLonlineClasses, "");
 		add("education", HTMLonlineStart, "");
 		for (var b = 0; b < this.onlineCourses.length; b++) {
 			var onlineCourseLink = replacify(HTMLonlineTitle, this.onlineCourses[b].title) + replacify(HTMLonlineSchool, this.onlineCourses[b].school)
 			add("oe", onlineCourseLink, "");
 			add("oe", HTMLonlineDates, this.onlineCourses[b].date);
 			add("oe", HTMLonlineURL, this.onlineCourses[b].url);
 		}


 	}
 }

var work = {
	jobs: [
		cjo("Sigma Epsilon Phi", "Assistant Chef", "Bloomington, IN", "November 2012 - April 2013", "Prepare meals for upwards of 90+ Fraterntity Members")
	],
	display: function() {
		add("workExperience", HTMLworkStart, "");
		for (var j = 0; j < this.jobs.length; j++) {
			var workLink = replacify(HTMLworkEmployer, this.jobs[j].employer)
			+ replacify(HTMLworkTitle, this.jobs[j].title);
			add("we", workLink, "");
			add("we", HTMLworkDates, this.jobs[j].dates);
			add("we", HTMLworkDescription, this.jobs[j].description);
		}
	}
}
var projects = {
	projects: [
		cpo("Global Chat Site", "March 2015", "Allows (n) number of people to Chat!", ["../frontend-nanodegree-resume/images/globchat.png"]),
		cpo("Go Board Game", "January 2015 - March 2015", "Allows 2 people to play the board game Go with no time limit", ["https://scontent-sjc2-1.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/1619253_1528147177424997_855475447153784079_n.jpg?oh=29d3a8507f96aef359180dc15e8de18a&oe=564B014F"])
	],
	display: function() {
		add("projects", HTMLprojectStart, "");
		for (var p = 0; p < this.projects.length; p++) {
			add("pe", HTMLprojectTitle, this.projects[p].title);
			add("pe", HTMLprojectDates, this.projects[p].dates);
			add("pe", HTMLprojectDescription, this.projects[p].description);
			var imgString = "";
			for (var imgIndex = 0; imgIndex < this.projects[p].images.length; imgIndex++) {
				imgString += replacify(HTMLprojectImage, this.projects[p].images[imgIndex]);
			}
			add("pe", imgString);
		}
	}
}

 var jsonDataObjects = [bio, education, projects, work];
 addAllJsons(jsonDataObjects);
 cloneFooterContacts();
 initializeMap();
 add("map-div", googleMap, "");

