MovementSystem = new function () {

    this.process = function (entities) {
        entities.forEach(processEntity);
    };

    let processEntity = function (entity) {
        mc = entity.components.acceleration;
        pc = entity.components.position;
        ac = entity.components.velocity;

        addCoordinates(pc, ac);
        addCoordinates(mc, pc);

    };

    let addCoordinates = function (v, dv) {
        v.x += dv.x;
        v.y += dv.y;
    };
};