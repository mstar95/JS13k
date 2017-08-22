function Engine(canvas) {
    this.canvas = canvas;
}

Engine.prototype.init = function () {
    RenderSystem.canvas = this.canvas;
    RenderSystem.ctx = this.canvas.getContext("2d");
    this.hero = HeroFactory.create();
};

Engine.prototype.run = function () {
	var parent = this; //zrzucam this.hero itd. do zmiennej
					   //tak żeby było dostępne w mainLoop()

	let mainLoop = function() {
    	MovementSystem.process([parent.hero]);
        RenderSystem.render([parent.hero]);
		InputSystem.control([parent.hero]);

		requestAnimationFrame(mainLoop);
	};
	console.log(this);
	requestAnimationFrame(mainLoop);
};
