
var bio = {
    "name": "Gurvinder Singh",
    "role": "Web Designer",
    "contacts": {
        "mobile": "+91-8427877302",
        "email": "gurvindersingh7931@gmail.com",
        "github": "gurvindersingh7931",
        "location": "Chandigarh"
    },
    "welcomeMessage": "Hi, Welcome to my resume. This is my second project for Udacity frontend web developer nanodegree.",
    "skills": ["HTML ", "CSS ", "JavaScript ", "MySQL ", "PHP ", "C ", "Networking"],
    "biopic": "images/me2.jpg",
    "display": displayBio
};

function displayBio() {
    $("#workExperience").append(HTMLworkStart);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);

    //var formattedContactGeneric = HTMLcontactGeneric.replace("%data%","Contacts");
    //$("#header").append(formattedContactGeneric);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedLocation);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBiopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append("\n"+formattedWelcomeMessage);

    if (HTMLskills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }

}
bio.display();
var work = {
    jobs: [{
            "employer": "InfoSys",
            "title": "Web Developer",
            "location": "Banglore",
            "dates": "2015-2016",
            "description": "This Web Developer job description sample template is optimized for advertising for a website developer on online job boards or careers pages. It is easy to customize with key duties and responsibilities.",
        },
        {
            "employer": "HCL",
            "title": "Web Designer",
            "location": "Pune",
            "dates": "2010-2014",
            "description": "This Web Developer job description sample template is optimized for advertising for a website developer on online job boards or careers pages. It is easy to customize with key duties and responsibilities.",
        }
    ],
    "display": displayWork
};



function displayWork() {
    for (var i=0;i<work.jobs.length;i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDatesWorked);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
}
work.display();

var projects = {
    "projects": [{
            "title": "Royal City Patiala",
            "dates": "2014",
            "description": "A website that provides information about city. Website made using HTML, CSS and PHP where user can view address of all kind of stores and many more famous places of city and user can submit a query if he wants to know more about at any place.",
            "images": ["images/rcp1.jpg", ""]
        },
        {
            "title": "Portfolio",
            "dates": "2017",
            "description": "A portfolio to show my awesome work while learning Udacity front end nanodegree program.",
            "images": ["images/portfo.jpg"]
        }
    ],
    "display": displayProjects
};

function displayProjects() {
    $("#projects").append(HTMLprojectStart);
    for (var i=0;i<projects.projects.length;i++) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[i].images.length > 0) {
            for (var image=0;image<projects.projects[i].images.length;image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
                    $(".project-entry:last").append(formattedImage);
            }
        }
    }
}
projects.display();

var education = {
    "schools": [{
        "name": "Thapar Polytechnic College",
        "location": "Patiala,Punjab",
        "degree": "Diploma",
        "majors": ["This is three years Computer Engineering diploma."],
        "dates": "2012-2015",
        "url": "http://www.tpc.ac.in/",
    }],

    "onlineCourses": [{
        "title": "Nanodegree",
        "school": "Udacity",
        "dates": "2017-2017",
        "url": "http://www.udacity.com",
    }],
    "display": displayEducation
};

function displayEducation() {
    for (var j=0;j<education.schools.length;j++) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[j].name);
        $(".education-entry:last").append(formattedName);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[j].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[j].degree);
        $(".education-entry:last").append(formattedDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[j].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[j].majors);
        $(".education-entry:last").append(formattedMajors);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.schools[j].url);
        $(".education-entry:last").append(formattedUrl);
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (var i=0;i<education.onlineCourses.length;i++) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        $(".education-entry:last").append(formattedTitle);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entry:last").append(formattedSchool);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedUrl1 = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedUrl1);
    }
}
education.display();
$("#mapDiv").append(googleMap);
