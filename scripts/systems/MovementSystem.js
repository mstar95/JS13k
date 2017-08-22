MovementSystem = new function () {

    this.processEntity = function (entity) {
        mc = entity.components.acceleration;
        pc = entity.components.position;
        ac = entity.components.velocity;

        this.addCoordinates(pc, ac);
        this.addCoordinates(mc, pc);

    };

    this.addCoordinates = function (v, dv) {
        v.x += dv.x;
        v.y += dv.y;
    };

    this.process = function (entities) {
        entities.forEach(this.processEntity);
    }
};