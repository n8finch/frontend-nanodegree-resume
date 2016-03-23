var bio, work, projects, education = {};

bio = {
  'name': 'Nate Finch',
  'role': 'Front End Web Developer',
  'contacts': {
    'mobile': '010-9581-1205',
    'email': 'nate@finchproservices.com',
    'github': 'github.com/n8finch',
    'twitter': 'twitter.com/n8finch',
    'location': 'Seoul, South Korea'
  },
  'welcomeMessage': 'Welcome',
  'skills': [
    'HTML',
    'CSS',
    'JavaScript'
  ],
  'biopic': 'https://avatars1.githubusercontent.com/u/7983116?v=3&s=460',
  'display': function()
};

work = {
  'jobs': [{
    'employer': 'Self/Freelancer',
    'title': 'WordPress Developer',
    'location': 'Seoul',
    'dates': '2014-present',
    'description': 'WordPress website development, Genesis Framework, e-commerce, membership, government, business and personal websites.'
  }],

  'display': function()
}

projects = {
  'projects': [{
    'title': 'AK Goods'
    'dates': 'March 2016',
    'description': 'e-commerce site, custom theme on Genesis Framework'
    'images': 'array with string urls'
  }],
  'display': function()
}


education = {
  'schools': [{
    'name': 'North Park University',
    'city': 'Chicago',
    'degree': 'MBA, MDiv',
    'certificates': 'Finance, International Business'
    'dates': 2012,
    'url': 'northpark.edu'

  }, {
    'name': 'University of Barcelona',
    'city': 'Barcelona',
    'degree': 'MA',
    'title': 'Citizenship and Human Rights: Ethics and Politics',
    'dates': 2009,
    'url': 'ub.edu'
  }],

  'onlineCourses' [{
    title: 'Front End Developer Course',
    school: 'Udacity'
    date: 2016
    url: 'udacity.com'
  }],
  display: function()
}