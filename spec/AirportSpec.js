describe ('Airport', function() {
  var airPort;

  beforeEach(function() {
    airPort = new AirPort();
  });

  it ('Confirms plane has landed', function() {
    expect(airPort.landed('plane 1')).toBe('Landing confirmed');
  });

});
