"use strict";

//entry point :
function main() {
  JEEFACETRANSFERAPI.init({
    canvasId: "canvas",
    NNCpath: "assets/model/",
    callbackReady: function(errCode) {
      if (errCode) {
        console.log(
          "ERROR - cannot init JEEFACETRANSFERAPI. errCode =",
          errCode
        );
        errorCallback(errCode);
        return;
      }
      console.log("INFO : JEEFACETRANSFERAPI is ready !!!");
      successCallback();
    } //end callbackReady()
  });
} //end main()

function successCallback() {
  // Call next frame
  nextFrame();
  // Add code after API is ready.
}

function errorCallback(errorCode) {
  // Add code to handle the error
}

function nextFrame() {
  if (JEEFACETRANSFERAPI.is_detected()) {
    // Do something awesome with rotation values
    let rotation = JEEFACETRANSFERAPI.get_rotationStabilized();
    // Do something awesome with animation values
    let expressions = JEEFACETRANSFERAPI.get_morphTargetInfluences();

    //**************************************************************************** */

    // The API is detected
    console.log("Detected");
  } else {
    // Tell the user that detection is off.
    console.log("Not Detected");
  }
  // Replay frame
  requestAnimationFrame(nextFrame);
}
