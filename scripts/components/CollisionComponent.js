function CollisionComponent(){
    this.up = true;
    this.down = false;
    this.left = true;
    this.right = true;
}

CollisionComponent.prototype.gravity = 10;
CollisionComponent.prototype.name = "collision";