'use strict'

require('./style.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import Routes from 'routes'

const App = () => (
	<Routes />
)

ReactDOM.render(<App />, document.getElementById('app-container'));