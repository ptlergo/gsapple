
// register the Draggable and InertiaPlugin with GSAP
gsap.registerPlugin(Draggable, InertiaPlugin);

// target outside container for dragging 
Draggable.create('.drag-container', {
  type: 'x,y',
  inertia: true,
  edgeResistance: 0.65,
  bounds: window, // keeps it on screen
  onPress: function() {
    console.log("Touched/Clicked the spinner!");
  },
});

// target inner container for spinning 
Draggable.create('.spin-target', {
    type: 'rotation',
    inertia: true,
    resistance: 0.85 // friction for nice slow down
});