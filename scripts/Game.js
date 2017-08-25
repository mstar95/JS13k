function startGame() {
	document.getElementById("menu").style.display = "none";
	document.getElementById("game").style.display = "block";
	let canvas = document.getElementById("game-canvas");
    let engine = new Engine(canvas);
    engine.init();
    engine.run();

}


