function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
var typed = new Typed(".auto-type", {
    strings: ["Hello, I'm Brian (Cút)"],
    typeSpeed: 10,
    backSpeed: 10,
    loop: false,
    showCursor: true,
    onComplete: (typed) => {
        removeElementsByClass("text");
}
});
