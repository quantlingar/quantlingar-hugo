(function() {
    var talks = document.getElementsByClassName("talk");
    var n_talks = talks.length;
    
    var talk1 = Math.floor((Math.random() * n_talks));
    var talk2 = talk1;
    
    while (talk1 === talk2) {
        talk2 = Math.floor((Math.random() * n_talks));
    }
    
    talks[talk1].style.display = "block";
    talks[talk2].style.display = "block";
    
})();
