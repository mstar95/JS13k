function Engine (canvas) {
    this.canvas = canvas
}

Engine.prototype.init = function () {
    RenderSystem.canvas = this.canvas;
    RenderSystem.ctx = this.canvas.getContext("2d");
    this.hero = HeroFactory.create();
};

Engine.prototype.run = function () {
    let i = 1000;
    while (i > 0){
       i--;
        MovementSystem.process([this.hero]);
        RenderSystem.render([this.hero]);
    }
};