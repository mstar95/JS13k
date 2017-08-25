function AccelerationComponent(x, y){
    this.x = x;
    this.y = y;
}

AccelerationComponent.prototype.name = "acceleration"

function CollisionComponent(){

    this.resetArgs = function () {
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
    };

    this.resetArgs();
}

CollisionComponent.prototype.gravity = 0.0000001;
CollisionComponent.prototype.name = "collision";

function GraphicComponent(color){
    this.color = color;
}

GraphicComponent.prototype.name = "graphic";

function PositionComponent(x, y){
    this.x = x;
    this.y = y;
}

PositionComponent.prototype.name = "position";

function SizeComponent(x, y){
    this.x = x;
    this.y = y;
}

SizeComponent.prototype.name = "size";

function VelocityComponent(x, y){
    this.x = x;
    this.y = y;
}

VelocityComponent.prototype.name = "velocity";