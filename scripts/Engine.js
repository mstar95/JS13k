function Engine () {

}

Engine.prototype.init = function () {
    this.hero = HeroFactory.create();
};

Engine.prototype.run = function () {
    let i = 10;
    while (i < 0){
       i--;
        MovementSystem.process([this.hero]);
    }
};

