 // var divElement = document.createElement('div');
 //        divElement.setAttribute('id', 'abc');
 //        document.body.appendChild(divElement);
 var browserName = navigator.appName;
var version = navigator.appVersion;
var browserInfoDiv = document.getElementById('browser-info');
browserInfoDiv.textContent = "You are using " + browserName + " version " + version;
