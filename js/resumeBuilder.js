var bio, work, projects, education = {};

bio = {
  'name': 'Nate Finch',
  'role': 'Front End Web Developer',
  'born': 'Houston, Texas',
  'contacts': {
    'mobile': '010-9581-1205',
    'email': 'n8finch@gmail.com',
    'github': 'n8finch',
    'twitter': 'n8finch',
    'blog': 'n8finch.com',
    'location': 'Seoul, South Korea'
  },
  'welcomeMessage': 'Front End Dev, WordPress, mostly on Genesis, learns a new thing everyday, married and loving it... ',
  'skills': [
    'HTML/HTML5',
    'CSS/CSS3',
    'JavaScript'
  ],
  'biopic': 'images/nate.jpg',
  display: function() {

    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);

    for (contact in bio.contacts) {

      var formattedContact = HTMLcontactGeneric.replace('%contact%', contact);
      formattedContact = formattedContact.replace('%data%', bio.contacts[contact]);
      $('#topContacts').append(formattedContact);

    }

    var bioPic = HTMLbioPic.replace('%data%', bio.biopic);
    $('#header').prepend(bioPic);

    $('#header').append(HTMLwelcomeDiv);

    var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#welcome-skills').append(formattedWelcome);

    if (bio.skills.length > 0) {
      $('#welcome-skills').append(HTMLskillsStart);

      for (skill in bio.skills) {
        var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
        $('#skills').append(formattedSkill);
      }


    }

  }
}

work = {
  'jobs': [{
    'employer': 'Self/Freelancer',
    'url': 'http://finchproservices.com',
    'title': 'WordPress Developer',
    'location': 'Seoul, South Korea',
    'dates': '2014-present',
    'description': 'WordPress website development, Genesis Framework, e-commerce, membership, government, business and personal websites.'
  }, {
    'employer': 'The Arrival Store',
    'url': 'http://thearrivalstore.com',
    'title': 'Business Developer',
    'location': 'Seoul, South Korea',
    'dates': '2012-2014',
    'description': 'Importing products, blog and e-commerce management, customer service, swiss army knife'

  }, {
    'employer': 'Fundació Ibn Batuta',
    'url': 'http://www.fundacionibnbattuta.org/en/',
    'title': 'intern',
    'location': 'Barcelona, Spain',
    'dates': '2009',
    'description': 'grant writing and brochure design.'

  }],

  display: function() {

    for (job in work.jobs) {

      $('#workExperience').append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
      var formattedEmployer = formattedEmployer.replace('%url%', work.jobs[job].url);
      var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;

      $('.work-entry:last').append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);

      $('.work-entry:last').append(formattedDates);

      var formattedLoc = HTMLworkLocation.replace('%data%', work.jobs[job].location);

      $('.work-entry:last').append(formattedLoc);

      var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);

      $('.work-entry:last').append(formattedDescription);
    }

  }
}

projects = {
  'projects': [{
    'title': 'AK Goods',
    'dates': 'March 2016',
    'description': 'e-commerce site, custom theme on Genesis Framework',
    'image': 'images/akgoods.jpg'
  }, {
    'title': 'ECCK',
    'dates': 'Sept. 2015 to Jan. 2016',
    'description': 'e-commerce site, CRM, custom website, custom theme on Genesis Framework',
    'image': 'images/ecck.jpg'
  }, {
    'title': 'Meg-n-Boots',
    'dates': 'Jan 2016',
    'description': 'Custom theme built on _s',
    'image': 'images/megnboots.jpg'
  }],
  display: function() {
    for (project in projects.projects) {
      $('#projectList').append(HTMLprojectStart);

      var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].image);
      $('.project-entry:last').append(formattedImage);

      var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
      $('.project-entry:last').append(formattedProjectTitle);

      var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
      $('.project-entry:last').append(formattedProjectDates);

      var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
      $('.project-entry:last').append(formattedProjectDescription);
    }
  }
}



education = {
  'schools': [{
    'name': 'North Park University',
    'location': 'Chicago, IL',
    'degree': 'MBA, MDiv',
    'specifics': 'Finance, International Business',
    'dates': '2009 - 2012',
    'url': 'http://northpark.edu'

  }, {
    'name': 'University of Barcelona',
    'location': 'Barcelona, Spain',
    'degree': 'MA',
    'specifics': 'Citizenship and Human Rights: Ethics and Politics',
    'dates': '2008-2009',
    'url': 'http://ub.edu'
  }, {
    'name': 'Arabic Language Institute of Fez',
    'location': 'Fes, Morocco',
    'degree': 'Certificate',
    'specifics': 'Beginner Arabic',
    'dates': '2009',
    'url': 'http://www.alif-fes.com/'
  }],
  'onlineCourses': {
    'title': 'Front End Developer Course',
    'school': 'Udacity',
    'date': '2016',
    'url': 'http://udacity.com',
    'classes': [
      'JavaScript Basics',
      'Object Oriented JavaScript',
      'Website Optimization'
    ]

  },
  display: function() {
    for (school in education.schools) {
      $('#education').append(HTMLschoolStart);

      var formattedSchoolName = HTMLprojectTitle.replace('%data%', education.schools[school].name);
      formattedSchoolName = formattedSchoolName.replace('%url%', education.schools[school].url);
      $('.education-entry:last').append(formattedSchoolName);

      var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
      $('.education-entry:last').append(formattedSchoolLocation);

      var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
      $('.education-entry:last').append(formattedSchoolDates);

      var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
      $('.education-entry:last').append(formattedSchoolDegree);

      var formattedSchoolSpecifics = HTMLschoolMajor.replace('%data%', education.schools[school].specifics);
      $('.education-entry:last').append(formattedSchoolSpecifics);
    }

    $('#education').append(HTMLonlineStart);
    $('.online-entry').append('<br/>' + HTMLonlineClasses);

    var formattedonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses.school);
    $('.online-entry:last').append(formattedonlineSchool);

    var formattedonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses.date);
    $('.online-entry:last').append(formattedonlineDates);

    var formattedOnlinelTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses.title);
    formattedOnlinelTitle = formattedOnlinelTitle.replace('%url%', education.onlineCourses.url);
    $('.online-entry:last').append(formattedOnlinelTitle);





  }
}











$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

function locationizer(work_obj) {

  var locations = [];

  for (job in work_obj.jobs) {


    locations.push(work_obj.jobs[job].location);
  }

  return locations;
}

locationizer(work);

function inName(name) {
  name = name.split(' ');
  console.log(name);
  name[1] = name[1].toUpperCase();

};

bio.display();
work.display();
projects.display();
education.display();
// $('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);