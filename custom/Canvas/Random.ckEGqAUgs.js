module.exports = (node, graph) => {
  const random = require('pex-random');

  const triggerIn = node.triggerIn('in');

  const triggerOut1 = node.triggerOut('out1');
  const triggerOut2 = node.triggerOut('out2');
  const triggerOut3 = node.triggerOut('out3');
  const triggerOut4 = node.triggerOut('out4');

  triggerIn.onTrigger = (props) => {
    random.seed(props.index + (new Date()));
    // random.seed(props.index);

    const t = random.float(0, 4);

    if (t <= 1) triggerOut1.trigger(props);
    else if (t <= 2) triggerOut2.trigger(props);
    else if (t <= 3) triggerOut3.trigger(props);
    else if (t <= 4) triggerOut4.trigger(props);
  };

  node.onReady = () => {
  };
  node.onDestroy = () => {
  };
};