'use strict';

const toggleElements = function (lang, displayProp) {
  var enElements = document.getElementsByClassName(lang);
  for (let i = 0; i < enElements.length; i++) {
    enElements[i].style.display = displayProp;
  }
};
toggleElements('de', 'none');

const changeViewTo = function (view) {
  console.log(`change view to ${view}`);
  if (view === 'de') {
    var en = document.getElementById('enToggle');
    en.classList.remove('badge');
    en.classList.remove('badge-primary');
    en.classList.remove('badge-pill');
    toggleElements('en', 'none');

    var de = document.getElementById('deToggle');
    de.classList.add('badge');
    de.classList.add('badge-primary');
    de.classList.add('badge-pill');
    toggleElements('de', 'block');
  } else {
    var de = document.getElementById('deToggle');
    de.classList.remove('badge');
    de.classList.remove('badge-primary');
    de.classList.remove('badge-pill');
    toggleElements('de', 'none');

    var en = document.getElementById('enToggle');
    en.classList.add('badge');
    en.classList.add('badge-primary');
    en.classList.add('badge-pill');
    toggleElements('en', 'block');
  }
};
