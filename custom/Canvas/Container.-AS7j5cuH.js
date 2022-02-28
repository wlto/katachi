module.exports = (node, graph) => {
  const triggerIn = node.triggerIn('in');
  const triggerOut = node.triggerOut('out');

  triggerIn.onTrigger = (props) => {
    const { canvas, ctx } = props;

    const width = 500;
    const height = 500;
    const padding = 50;
    const step = 50;

    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 4;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeRect(
      padding - 1,
      padding - 1,
      width + 2,
      height + 2
    ); // true 500x500 rectangle

    // ctx.save();
    // ctx.beginPath();
    // ctx.moveTo(padding, padding);
    // ctx.lineTo(width + padding, padding);
    // ctx.lineTo(width + padding, height + padding);
    // ctx.lineTo(padding, height + padding);
    // ctx.lineTo(padding, padding);
    // ctx.stroke();
    // ctx.closePath();
    // ctx.restore();

    triggerOut.trigger({
      ctx,
      step,
      canvasPadding: padding,
      canvasWidth: width,
      canvasHeight: height
    });
  };

  node.onReady = () => {
  };
  node.onDestroy = () => {
  };
};