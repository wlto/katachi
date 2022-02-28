module.exports = (node, graph) => {
  const triggerOut = node.triggerOut('out');

  const canvas = document.createElement('canvas');
  canvas.style.width = '100%';
  canvas.style.height = '100%';

  const dpr = window.devicePixelRatio;
  const ctx = canvas.getContext('2d');
  graph.sceneContainer.appendChild(canvas);

  // Draw function
  const draw = () => {

    if (canvas.width !== graph.sceneContainer.clientWidth) {
      canvas.width = graph.sceneContainer.clientWidth * dpr;
    }
    if (canvas.height !== graph.sceneContainer.clientHeight) {
      canvas.height = graph.sceneContainer.clientHeight * dpr;
    }

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.scale(dpr, dpr);

    // Out trigger
    triggerOut.trigger({
      canvas,
      ctx
    });

    requestAnimationFrame(draw);
  };

  node.onReady = () => {
    draw();
  };

  node.onDestroy = () => {
    if (canvas) canvas.remove();
  };
};