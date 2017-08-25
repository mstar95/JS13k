function Engine(canvas) {
    this.canvas = canvas;
}

Engine.prototype.init = function () {
    RenderSystem.canvas = this.canvas;
    RenderSystem.ctx = this.canvas.getContext("2d");
    RenderSystem.scale = 10;
    this.hero = HeroFactory.create();
    this.entities = LevelFactory.createLvl1(this.canvas.width, this.canvas.height);
	this.entities.push(this.hero)
};

Engine.prototype.run = function () {
	var parent = this;	//copy this.hero etc. to variable
						//to make it accessible into mainLoop()

	let mainLoop = function() {

        InputSystem.control([parent.hero]);
        CollisionSystem.process(parent.entities);
    	MovementSystem.process(parent.entities);
        RenderSystem.render(parent.entities);

		requestAnimationFrame(mainLoop);
	};
	console.log(this);
	requestAnimationFrame(mainLoop);
};
