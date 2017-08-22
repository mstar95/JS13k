
function startGame() {
	document.getElementById("menu").style.display = "none";
	document.getElementById("game").style.display = "block";
    let engine = new Engine();
    engine.init();
    engine.run();
}


