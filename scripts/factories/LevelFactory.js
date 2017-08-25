LevelFactory = new function () {
    this.createLvl1 = function (width, heigth) {
        let entities = [];
        let i = 0;

        while(i < width) {
            let entity = new Entity();
            entity.addComponent(new PositionComponent(i, heigth - 6 * RenderSystem.scale));
            entity.addComponent(new SizeComponent(10, 10));
            entity.addComponent(new GraphicComponent("#000000"));
            entities.push(entity);
            i += RenderSystem.scale;
        }


        let entity = new Entity();
        entity.addComponent(new PositionComponent(50, 40));
        entity.addComponent(new SizeComponent(20, 20));
        entity.addComponent(new GraphicComponent("#000000"));
        entities.push(entity);

        return entities;
    }
};
