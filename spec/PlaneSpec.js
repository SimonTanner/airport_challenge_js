describe ('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it ('Plane will land at an airport', function() {
    plane.land();
    expect(plane.inflight).toBe(false);
  });

});
