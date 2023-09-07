const character = document.getElementById("character");

function startAnimation() {
    document.getElementById("character").classList.add('animate'); 
}

function stopAnimation() {
    document.getElementById("character").classList.remove('animate');
}
