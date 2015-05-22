(function() {
  var config = require('./config.json');
  var themeName = config.theme.name;
  var themeFile = './css/' + process.platform + '.css';
  var theme = document.createElement('link');
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
})();
