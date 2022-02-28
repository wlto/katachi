module.exports = (node, graph) => {
  const triggerIn = node.triggerIn('in');
  const triggerOut = node.triggerOut('out');

  triggerIn.onTrigger = (props) => {
    const { ctx, step, canvasPadding, canvasWidth, canvasHeight } = props;

    const baseX = canvasPadding;
    const baseY = canvasPadding;
    const squareDimension = step;
    let index = 0;

    for (let y = 0; y < canvasHeight; y += step) {
      const posY = baseY + y;

      for (let x = 0; x < canvasWidth; x += step) {
        const posX = baseX + x;

        ctx.save();
        ctx.fillStyle = '#ffffff';
        ctx.moveTo(posX, posY);
        // ctx.fillRect(
        //   posX,
        //   posY,
        //   squareDimension,
        //   squareDimension
        // );
        // ctx.strokeRect(
        //   posX,
        //   posY,
        //   squareDimension,
        //   squareDimension
        // );

        triggerOut.trigger({
          ctx,
          index,
          squareDimension,
          posX,
          posY
        });

        ctx.restore();
        index++;
      }
    }
  };

  node.onReady = () => {
  };
  node.onDestroy = () => {
  };
};