import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

const Demo = React.createClass({
  render() {
    return (
      <Button type="primary" size="large" icon="plus-circle">Hello there</Button>
    );
  }
});

ReactDOM.render(<Demo />, document.getElementById('container'));