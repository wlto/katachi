module.exports = (node, graph) => {
  const triggerIn = node.triggerIn('in');

  triggerIn.onTrigger = (props) => {
    const { ctx, squareDimension, posX, posY } = props;

    const x = posX + (squareDimension / 2);
    const y = posY + (squareDimension / 2);

    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(
      x - (squareDimension / 7),
      y - (squareDimension / 7),
    );
    ctx.lineTo(
      x + (squareDimension / 7),
      y + (squareDimension / 7),
    );
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(
      x + (squareDimension / 7),
      y - (squareDimension / 7),
    );
    ctx.lineTo(
      x - (squareDimension / 7),
      y + (squareDimension / 7),
    );
    ctx.stroke();
    ctx.closePath();
  };

  node.onReady = () => {
    
  };

  node.onDestroy = () => {
  };
};