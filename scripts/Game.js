
function startGame() {
	document.getElementById("menu").style.display = "none";
	document.getElementById("game").style.display = "block";
}

Game = new function () {
  engine = new Engine();
  engine.init();
  engine.run();
};

