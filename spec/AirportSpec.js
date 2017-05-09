describe ('Airport', function() {
  var airPort;
  var plane;

  beforeEach(function() {
    airPort = new AirPort();
    plane = new Plane();
  });

  it ('Confirms plane has landed', function() {
    expect(airPort.land(plane)).toBe('Landing confirmed');
  });

  it ('Stores list of plane at airport', function () {
    airPort.land(plane);
    expect(airPort.hangar).toContain(plane);
  });

});
