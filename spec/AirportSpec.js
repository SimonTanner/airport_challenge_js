describe ('Airport', function() {
  var airPort;
  var planeName;

  beforeEach(function() {
    airPort = new AirPort();
    planeName = new Plane();
  });

  it ('Confirms plane has landed', function() {
    expect(airPort.land(planeName)).toBe(planeName + ' landing confirmed');
  });

  it ('Stores list of plane at airport', function () {
    airPort.land(planeName);
    expect(airPort.hangar).toContain(planeName);
  });

});
