RenderSystem = new function () {

    this.render = function (entities) {
        entities.forEach(this.renderEntity);
    };

    this.renderEntity = function (entity) {
		
		let pc = entity.components.position;
        let sc = entity.components.size;
        RenderSystem.scale = 10;
        RenderSystem.ctx.beginPath();
        RenderSystem.ctx.rect(pc.x , pc.y , sc.x * RenderSystem.scale, sc.y * RenderSystem.scale);
        RenderSystem.ctx.fillStyle = "#FF0000";
        RenderSystem.ctx.fill();
        RenderSystem.ctx.closePath();
    };
};