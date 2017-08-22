RenderSystem = new function () {

    this.render = function (entities) {
        entities.forEach(this.renderEntity);
    };

    this.renderEntity = function (entity) {
        let pc = entity.components.position;
        let sc = entity.components.size;
        this.scale = 10;
        this.ctx.beginPath();
        this.ctx.rect(pc.x , pc.y , sc.x * this.scale, sc.y * this.scale);
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fill();
        this.ctx.closePath();
    };
    console.log(this);
};