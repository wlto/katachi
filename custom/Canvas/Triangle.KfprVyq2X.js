module.exports = (node, graph) => {
  const triggerIn = node.triggerIn('in');

  triggerIn.onTrigger = (props) => {
    const { ctx, squareDimension, posX, posY } = props;

    const x = posX + (squareDimension / 2);
    const y = posY + (squareDimension / 2);

    ctx.moveTo(x, y);
    ctx.beginPath();
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = '#000000';
    ctx.moveTo(x, y - squareDimension / 6);
    ctx.lineTo(x + squareDimension / 6, y + squareDimension / 6);
    ctx.lineTo(x - squareDimension / 6, y + squareDimension / 6);
    ctx.lineTo(x, y - squareDimension / 6);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  };

  node.onReady = () => {
    
  };

  node.onDestroy = () => {
  };
};