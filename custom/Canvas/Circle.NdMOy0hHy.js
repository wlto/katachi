module.exports = (node, graph) => {
  const triggerIn = node.triggerIn('in');

  triggerIn.onTrigger = (props) => {
    const { ctx, squareDimension, posX, posY } = props;

    const radius = squareDimension / 5;
    const startAngle = 0;
    const endAngle = Math.PI + ( 2 * Math.PI) / 2;

    const x = posX + (squareDimension / 2);
    const y = posY + (squareDimension / 2);

    // ctx.moveTo(x, y);
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fill();
    ctx.closePath();
  };

  node.onReady = () => {
    
  };

  node.onDestroy = () => {
  };
};