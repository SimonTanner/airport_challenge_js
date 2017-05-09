describe ('Airport', function() {
  var airPort;
  var plane;

  beforeEach(function() {
    airPort = new AirPort();
    plane = jasmine.createSpyObj('plane', ['inflight', 'name', 'land']);

    plane.inflight = false;
    plane.land();
    plane.name = 'EGH567';
  });

  it ('Confirms plane has landed', function() {
    expect(airPort.land(plane)).toBe(plane.name + ' landing confirmed');
    console.log(plane.name);
  });

  it ('Stores list of plane at airport', function () {
    airPort.land(plane);
    expect(airPort.hangar).toContain(plane);
  });

});
