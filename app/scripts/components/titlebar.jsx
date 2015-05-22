import React from 'react'

let WindowControls = React.createClass({
  render: function () {
    return (
      <window-controls>
      </window-controls>
    )
  }
});

let Titlebar = React.createClass({
  render: function () {
    return (
      <titlebar>
        <window-controls>
          <span className="window-control close"></span>
          <span className="window-control min"></span>
          <span className="window-control max"></span>  
        </window-controls>
        <h1 className="title">{config.name}</h1>
      </titlebar>
    )
  }
});

export default Titlebar;
