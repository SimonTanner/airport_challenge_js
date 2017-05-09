describe ('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it ('Plane will land at an airport', function() {
    expect(plane.land('Airport')).toBe('Landing at Airport');
  });

});
