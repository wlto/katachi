module.exports = (node, graph) => {
  const triggerIn = node.triggerIn('in');

  triggerIn.onTrigger = (props) => {
    const { ctx, squareDimension, posX, posY } = props;

    const x = posX + (squareDimension / 2);
    const y = posY + (squareDimension / 2);

    ctx.fillStyle = '#000000';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 4;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.fillRect(
      x - squareDimension / 6,
      y - squareDimension / 6,
      squareDimension / 3,
      squareDimension / 3
    );
    ctx.strokeRect(
      x - squareDimension / 6,
      y - squareDimension / 6,
      squareDimension / 3,
      squareDimension / 3
    );
  };

  node.onReady = () => {
    
  };

  node.onDestroy = () => {
  };
};