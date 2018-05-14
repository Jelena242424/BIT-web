function hello () {
    var hello = "Hello from external JS!";
   console.log(hello);
   }

   hello();

function browser () {
    console.log(navigator.userAgent);
    console.log(navigator.vendor);
    console.log(navigator.appVersion);   
    console.log(navigator.platform);
}

function isOnline () {
    var output = "";
    if (navigator.onLine) {
        output = "I am online!!!!"
    } else {
        output = "I am not online :("
    }
    return output;
}

function height () {
    console.log(screen.availHeight);
    console.log(screen.availWidth);
    console.log(screen.height);
    console.log(screen.width);
}

function urlInformation () {
    console.log(location.href);
    console.log(location.hostname);
    console.log(location.protocol);
    console.log(location.pathname);
    console.log(location.hash);
    console.log(location.search);
}

function reloadPage () {
    return location.reload();
}
function redirect (){
    return location.href = "http://www.google.com";
}

function stored () {
    sessionStorage.setItem("name", "Jelena");
};

function printLocalStorageData (key) {
    var data = sessionStorage.getItem(key) || "There is no data";
   console.log(data);
}

function removeData (key) {
    sessionStorage.removeItem(key);
}

function moveBack() {
    history.back();
}

function moveForward() {
    history.forward();
}

function moveNumber(num) {
    history.go(num);
}

function navigateTwoPagesBack () {
    history.go(-2);
}