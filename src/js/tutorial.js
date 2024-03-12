class GamepadController {
  constructor() {
    this.buttons =
      document.querySelectorAll(".btn");
    this.status =
      document.querySelector(".status");

    // Start monitoring gamepads.
    this.monitorGamepad();
  }

  monitorGamepad() {
    window.requestAnimationFrame(() => {
      // Get the current state
      // of all connected gamepads.
      const gamepads = navigator.getGamepads();

      // Check the first gamepad.
      const connectedGamepad = gamepads[0];

      // Update the status based
      // on whether a gamepad is connected.
      this.status.innerHTML = connectedGamepad
        ? `<span>✅</span> ACTIVE`
        : `<span>❌</span> INACTIVE`;

      // If a gamepad is connected,
      // update the button states in the UI.
      if (connectedGamepad) {
        this.updateButtonStates(connectedGamepad);
      }

      // Continue monitoring.
      this.monitorGamepad();
    });
  }

  updateButtonStates(connectedGamepad) {
    // Iterate through each button
    // on the connected gamepad.
    connectedGamepad.buttons.forEach(
      (gamepadButton, index) => {
        // Find the corresponding
        // button element in the UI.
        const button = this.buttons[index];

        // If the button exists in the UI,
        // update its `pressed` state.
        if (button) {
          button.classList.toggle(
            "pressed",
            gamepadButton.pressed
          );
        }
      }
    );
  }
}

new GamepadController();
