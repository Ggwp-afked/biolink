function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
var typed = new Typed(".auto-type", {
    strings: ["Bonjour, je m'appelle Brian (Cút)"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: false,
    showCursor: true,
    onComplete: (typed) => {
        removeElementsByClass("text");
}
});