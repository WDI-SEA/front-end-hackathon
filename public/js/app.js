$(document).ready(function() {
  console.log('this is connected');

  var context = new AudioContext(), oscillator = null, mousedown = false;

  var gainNode = context.createGain();

  function calculateFrequency(mouseXPosition) {
    var minFrequency = 50;
    var maxFrequency = 1500;

    return ((mouseXPosition / window.innerWidth) * maxFrequency) + minFrequency;
  };

  function calculateGain(mouseYPosition) {
    var minGain = 0;
    var maxGain = 1;

    return 1 - ((mouseYPosition / window.innerHeight) * maxGain) + minGain;
  };

  $(document).mousedown(function(e){
    console.log(e.clientX);
    console.log(e.clientY);
    oscillator = context.createOscillator();
    oscillator.frequency.setTargetAtTime(calculateFrequency(e.clientX), context.currentTime, 0.01);
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    oscillator.start(context.currentTime);
  });

  $(document).mouseup(function() {
    if (oscillator) {
      oscillator.stop(context.currentTime);
      oscillator.disconnect();
    };
  });

  $(document).mousemove(function(e) {
    if (oscillator) {
      oscillator.frequency.setTargetAtTime(calculateFrequency(e.clientX), context.currentTime, 0.01);
    };
    gainNode.gain.setTargetAtTime(calculateGain(e.clientY), context.currentTime, 0.01);
  });

  $('#hide').click(function(e) {
    e.preventDefault();
    $('.piano').hide();

  });

  $('#show').click(function(e) {
    e.preventDefault();
    $('.piano').show();
  });

});
