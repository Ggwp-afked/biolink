
var typed = new Typed(".auto-type", {
    strings: ["Hello, I'm Brian (Cút)"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: false,
    showCursor: true,
    onComplete: (typed) => {
        document.getElementById("text").remove();
        
    }
});