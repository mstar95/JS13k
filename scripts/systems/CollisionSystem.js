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
        cc.resetArgs();
        for (barrier of entities) {
            if (entity === barrier)
                continue;

            let pc2 = barrier.components.position;
            let sc2 = barrier.components.size;
            if (!pc2 || !sc2)
                continue;

            if ((pc.x > pc2.x) && check1DIntersection(pc.y, sc.y, pc2.y, sc2.y)) {
                if (pc.x - pc2.x < sc2.x  + epsilon) {
                    cc.left = true;
                }
            }

            if ((pc.x < pc2.x ) && check1DIntersection(pc.y, sc.y, pc2.y, sc2.y)) {
                if (pc2.x - pc.x < sc.x + epsilon) {
                    cc.right = true;
                }
            }


            if ((pc.y > pc2.y)  && check1DIntersection(pc.x, sc.x, pc2.x, sc2.x)) {
                if (pc.y - pc2.y < sc2.y + epsilon) {
                    cc.up = true;
                }
            }

            if ((pc.y < pc2.y) && check1DIntersection(pc.x, sc.x, pc2.x, sc2.x)) {
                if (pc2.y - pc.y < sc.y  + epsilon) {
                    cc.down = true;
                }
            }
        }
    };

    let check1DIntersection = function (p1, s1, p2, s2) {
        if(p1 === p2)
            return true;
        if(p1 > p2){
            return (p1 < p2 + s2);
        }
        return (p1 + s1 > p2);
    }

};