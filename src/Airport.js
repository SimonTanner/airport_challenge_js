"use strict";

function AirPort() {
  this.hangar = [];
}

AirPort.prototype.land = function(plane) {
  (this.hangar).push(plane);
  plane.land();
  return(plane.name + " landing confirmed");
};

module.exports = AirPort;
