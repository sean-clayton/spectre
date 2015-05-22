import React from 'react'
import Titlebar from './components/titlebar.jsx'
import Navbar from './components/navbar.jsx'

window.React = React;
React.render(<Navbar />, document.body);
React.render(<Titlebar />, document.body);