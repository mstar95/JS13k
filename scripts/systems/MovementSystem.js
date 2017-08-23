MovementSystem = new function () {

    this.process = function (entities) {
        entities.forEach(processEntity);
    };

    let processEntity = function (entity) {
        pc = entity.components.position;
        vc = entity.components.velocity;
        ac = entity.components.acceleration;
        cc = entity.components.collision;

        if(!pc || !vc || !ac || !cc)
            return;

        //console.log(cc.down);
        if (cc.left || cc.right) {
            vc.x = 0;
        }

        if (cc.down) {
            vc.y = 0;
            ac.y = 0;
        }
        addCoordinates(vc, ac);
        addCoordinates(pc, vc);

    };

    let addCoordinates = function (v, dv) {
        v.x += dv.x;
        v.y += dv.y;
    };
};