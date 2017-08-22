MovementSystem = new function () {

    this.process = function (entities) {
        entities.forEach(processEntity);
    };

    let processEntity = function (entity) {
        pc = entity.components.position;
        vc = entity.components.velocity;
        ac = entity.components.acceleration;
        addCoordinates(vc, ac);
        addCoordinates(pc, vc);

    };

    let addCoordinates = function (v, dv) {
        v.x += dv.x;
        v.y += dv.y;
    };
};