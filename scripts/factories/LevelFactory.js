LevelFactory = new function () {
    this.createLvl1 = function (width, heigth) {
        let entities = [];
        let i = 0;
        while(i < width) {
            let entity = new Entity();
            entity.addComponent(new PositionComponent(i, heigth - RenderSystem.scale));
            entity.addComponent(new SizeComponent(1, 1));
            entity.addComponent(new GraphicComponent("#000000"));
            entities.push(entity);
            i += RenderSystem.scale;
        }
        return entities;
    }
};
