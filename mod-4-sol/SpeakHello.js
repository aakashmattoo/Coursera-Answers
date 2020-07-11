(function(window) {
    var helloSpeaker = new Object();
    var speakWord = "Hiyaaaa";
    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name+ " !");
    };
    window.helloSpeaker = helloSpeaker;
})(window);
