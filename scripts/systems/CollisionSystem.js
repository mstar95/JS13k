CollisionSystem = new function () {

    epsilon = 1;

    this.process = function (entities) {
        for(entity of entities ){
            processEntity(entity, entities)
        }
    };

    let processEntity = function (entity, entities) {
        cc = entity.components.collision;
        if (!cc)
            return;

        let pc = entity.components.position;
        let sc = entity.components.size;

        for (barrier of entities) {
            if (entity === barrier)
                continue;

            let pc2 = barrier.components.position;
            let sc2 = barrier.components.size;
            if (!pc2 || !sc2)
                continue;

            if (pc.x > pc2.x) {
                if (pc.x - pc2.x < sc.x + sc2.x + epsilon) {
                    cc.left = true;
                }
            }

            if (pc.x < pc2.x) {
                if (pc2.x - pc.x < sc.x + sc2.x + epsilon) {
                    cc.right = true;
                }
            }

            if (pc.y > pc2.y) {
                if (pc.y - pc2.y < sc.y + sc2.y + epsilon) {
                    cc.down = true;
                }
            }

            if (pc.y < pc2.y) {
                if (pc.y - pc2.y < sc.y + sc2.y + epsilon) {
                    cc.up = true;
                }
            }
        }
    }
};