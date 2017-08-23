HeroFactory = new function () {
    this.create = function () {
        let entity = new Entity();
        entity.addComponent(new PositionComponent(0, 0));
        entity.addComponent(new VelocityComponent(0, 0));
        entity.addComponent(new AccelerationComponent(0, 0));
        entity.addComponent(new SizeComponent(1, 2));
        entity.addComponent(new CollisionComponent());
        entity.addComponent(new GraphicComponent("#FF0000"));
        return entity;
    }
};
