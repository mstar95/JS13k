RenderSystem = new function () {

    this.render = function (entities) {
        this.renderScreen()
        entities.forEach(this.renderEntity);
    };

    this.renderEntity = function (entity) {
		let pc = entity.components.position;
        let sc = entity.components.size;
        let gc = entity.components.graphic;
        RenderSystem.ctx.beginPath();
        RenderSystem.ctx.rect(pc.x , pc.y , sc.x * RenderSystem.scale, sc.y * RenderSystem.scale);
        RenderSystem.ctx.fillStyle = gc.color;
        RenderSystem.ctx.fill();
        RenderSystem.ctx.closePath();
    };

    this.renderScreen = function () {
        RenderSystem.ctx.beginPath();
        RenderSystem.ctx.rect(0 , 0 , RenderSystem.canvas.width, RenderSystem.canvas.height);
        RenderSystem.ctx.fillStyle = "#66ff6d";
        RenderSystem.ctx.fill();
        RenderSystem.ctx.closePath();
    };

};