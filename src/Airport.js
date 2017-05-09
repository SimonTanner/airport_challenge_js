function AirPort() {
  this.hangar = [];
}

AirPort.prototype.land = function(plane) {
  (this.hangar).push(plane);
  return('Landing confirmed');
};
