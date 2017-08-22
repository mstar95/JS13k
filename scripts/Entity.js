function Entity(){
    this.components = {};
}

Entity.prototype.addComponent = function addComponent ( component ){
    this.components[component.name] = component;
    return this;
};

Entity.prototype.removeComponent = function ( componentName ){

    let name = componentName;

    if(typeof componentName === 'function'){
        name = componentName.prototype.name;
    }

    delete this.components[name];
    return this;
};

Entity.prototype.print = function () {
    console.log(JSON.stringify(this, null, 4));
    return this;
};