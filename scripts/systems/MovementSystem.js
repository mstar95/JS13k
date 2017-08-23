MovementSystem = new function () {

    this.process = function (entities) {
        entities.forEach(processEntity);
    };

    let processEntity = function (entity) {
        pc = entity.components.position;
        vc = entity.components.velocity;
        ac = entity.components.acceleration;
        fc = entity.components.fall
        if (fc.falling === true) {
            ac.y = fc.gravity
        }
        addCoordinates(vc, ac);
        addCoordinates(pc, vc);

    };

    let addCoordinates = function (v, dv) {
        v.x += dv.x;
        v.y += dv.y;
    };
};