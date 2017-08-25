InputSystem = new function () {
	let _moveSpeed = 2;
	
	this.leftPressed = false;
	this.upPressed = false;
	this.rightPressed = false;
	this.downPressed = false;

	//dwie funkcje do eventListenerów
	
	function keyDownHandler(e) {
		if (e.keyCode == 37) {
			InputSystem.leftPressed = true;
		} else if (e.keyCode == 38) {
			InputSystem.upPressed = true;
			e.preventDefault(); //prevent scrolling window
		} else if (e.keyCode == 39) {
			InputSystem.rightPressed = true;
		} else if (e.keyCode == 40) {
			InputSystem.downPressed = true;
			e.preventDefault();
		}
	}

	function keyUpHandler(e) {
		if (e.keyCode == 37) {
			InputSystem.leftPressed = false;
		} else if (e.keyCode == 38) {
			InputSystem.upPressed = false;
		} else if (e.keyCode == 39) {
			InputSystem.rightPressed = false;
		} else if (e.keyCode == 40) {
			InputSystem.downPressed = false;
		}
	}

	//rejestracja eventListenerów
	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);
	
	
	this.control = function (entities) {
		entities.forEach(processEntity);
	};

	let processEntity = function (entity) {
		vc = entity.components.velocity;

		//może lepiej if zamiast else if, póki co zostawiam tak
		if (InputSystem.leftPressed) {
			vc.x = - _moveSpeed;
		} else if (InputSystem.upPressed) {
			vc.y = - 2;
			return;
		} else if (InputSystem.rightPressed) {
			vc.x = _moveSpeed;
		} else if (InputSystem.downPressed) {
			//vc.y = _moveSpeed;
			return;
		}

		if (!InputSystem.leftPressed && !InputSystem.rightPressed) {
            vc.x = 0
        }

        /*
        if (!InputSystem.upPressed && !InputSystem.downPressed) {
            vc.y = 0
        }*/

	};
}
