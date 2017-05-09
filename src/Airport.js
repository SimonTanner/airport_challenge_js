function AirPort(plane) {
  this.plane = new Plane();
  this.hangar = [];
}

AirPort.prototype.land = function(plane) {
  (this.hangar).push(plane);
  this.plane.land();
  console.log(plane.land);
  return(plane + " landing confirmed");
};
