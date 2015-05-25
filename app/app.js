(function() {
  var config = require('./config.json');
  var remote = require('remote');
  var themeFile = './css/' + process.platform + '.css';
  var theme = document.createElement('link');
  var BrowserWindow = remote.require('browser-window');
  var win = remote.getCurrentWindow();
  theme.href = themeFile;
  theme.rel = 'stylesheet';
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(theme);

  // Settings!

  if(localStorage.length === 0) {
    console.log('Local Storage is empty!');
    console.log('Setting default settings!');
    localStorage.setItem('bob', true);
    console.log(localStorage);
    console.log('Default settings set!');
  }
  else {
    console.log('Local Storage is NOT empty!');
    console.log(localStorage.getItem('bob'));
  }

  // Window Management

  var closeWindow = function() {
    win.close();
  };

  var minimizeWindow = function() {
    win.minimize();
  }

  var maximizeWindow = function() {
    if(win.isMaximized()) {
      win.restore();
    }
    else {
      win.maximize();
    }
  }

  var closeButton = document.querySelector('.window-controls .close');
  var minimizeButton = document.querySelector('.window-controls .min');
  var maximizeButton = document.querySelector('.window-controls .max');
  var titleBar = document.querySelector('.titlebar');

  closeButton.addEventListener('click', closeWindow);
  minimizeButton.addEventListener('click', minimizeWindow);
  maximizeButton.addEventListener('click', maximizeWindow);
  titleBar.addEventListener('click', function() { console.log(this); });

  // Set title

  var titleHeading = document.querySelector('h1.title');

  titleHeading.innerText = config.name || "App Name";

  // Activity bar clicking

  var activityBar = document.querySelector('.activity-bar');
  activityBar.addEventListener('transitioned', function() {
    console.log('hello!');
  });

  var navBar = document.getElementsByClassName('navbar')[0];
  navBar.addEventListener('transitionend', function() {
    console.log('hello! transitioned!');
  })
})();