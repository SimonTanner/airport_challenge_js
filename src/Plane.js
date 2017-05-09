

function Plane() {
  this.inflight = false;
}

Plane.prototype.land = function() {
  this.inflight = false;
};

module.exports = Plane;
