var bio, work, projects, education = {};

bio = {
  'name': 'Nate Finch',
  'role': 'Front End Web Developer',
  'contacts': {
    'mobile': '010-9581-1205',
    'email': 'nate@finchproservices.com',
    'github': 'github.com/n8finch',
    'twitter': 'twitter.com/n8finch',
    'blog': 'n8finch.com',
    'location': 'Seoul, South Korea'
  },
  'welcomeMessage': 'Welcome',
  'skills': [
    'HTML',
    'CSS',
    'JavaScript'
  ],
  'biopic': 'https://avatars1.githubusercontent.com/u/7983116?v=3&s=460',
  display: function() {

    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);

    for(contact in bio.contacts) {

  var formattedContact = HTMLcontactGeneric.replace('%contact%', contact);
  formattedContact = formattedContact.replace('%data%', bio.contacts[contact]);
  $('#topContacts').append(formattedContact);

}

    // var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    // $('#topContacts').append(formattedMobile);
    // var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    // $('#topContacts').append(formattedEmail);
    // var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    // $('#topContacts').append(formattedTwitter);
    // var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    // $('#topContacts').append(formattedGithub);
    // var formattedBlog = HTMLblog.replace('%data%', bio.contacts.blog);
    // $('#topContacts').append(formattedBlog);
    // var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    // $('#topContacts').append(formattedLocation);

    if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);

      var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
      $('#skills').append(formattedSkill);

      formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
      $('#skills').append(formattedSkill);

      formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
      $('#skills').append(formattedSkill);



    }

  }
}

work = {
  'jobs': [{
    'employer': 'Self/Freelancer',
    'title': 'WordPress Developer',
    'location': 'Seoul, South Korea',
    'dates': '2014-present',
    'description': 'WordPress website development, Genesis Framework, e-commerce, membership, government, business and personal websites.'
  }, {
    'employer': 'The Arrival Store',
    'title': 'Business Developer',
    'location': 'Seoul, South Korea',
    'dates': '2012-2014',
    'description': 'Importing products, blog and e-commerce management, customer service, swiss army knife'

  }],

  display: function() {

    for (job in work.jobs) {
      console.log(work.jobs[job].title);

      $('#workExperience').append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;

      $('.work-entry:last').append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);

      $('.work-entry:last').append(formattedDates);

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
    'images': '#'
  }, {
    'title': 'ECCK',
    'dates': 'Sept. 2015 to Jan. 2016',
    'description': 'e-commerce site, CRM, custom website, custom theme on Genesis Framework',
    'images': '#'
  }, {
    'title': 'Meg-n-Boots',
    'dates': 'Jan 2016',
    'description': 'Custom theme built on _s',
    'images': '#'
  }],
  display: function() {
    for (project in projects.projects) {
      $('#projects').append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);

      $('.project-entry:last').append(formattedProjectTitle);

      var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);

      $('.project-entry:last').append(formattedProjectDates);

      var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);

      $('.project-entry:last').append(formattedProjectDescription);

      if (projects.projects[project].images.length > 0) {

        for (image in projects.projects[project].images) {

          var formattedImage = HTMLprojectImage.replace('%data', projects.projects[image].images[image]);
          $('.project-entry:last').append(formattedImage);

        }
      }

    }
  }
}



education = {
  'schools': [{
    'name': 'North Park University',
    'location': 'Chicago, IL',
    'degree': 'MBA, MDiv',
    'certificates': 'Finance, International Business',
    'dates': 2012,
    'url': 'northpark.edu'

  }, {
    'name': 'University of Barcelona',
    'location': 'Barcelona, Spain',
    'degree': 'MA',
    'title': 'Citizenship and Human Rights: Ethics and Politics',
    'dates': 2009,
    'url': 'ub.edu'
  }],

  'onlineCourses': [{
    title: 'Front End Developer Course',
    school: 'Udacity',
    date: 2016,
    url: 'udacity.com'
  }],
  // display: function() {
  // 	for (project in projects)
}


var formattedName = HTMLheaderName.replace('%data%', bio.name);

var formattedRole = HTMLheaderRole.replace('%data%', bio.role);









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

  console.log(locations);
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
$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);