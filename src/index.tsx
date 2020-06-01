import React from 'react';
import ReactDom from 'react-dom';
import 'es6-object-assign/auto';
import VConsole from 'vconsole';
import App from './index.router';
if (process.env.NODE_ENV != 'production') {
	new VConsole();
}
ReactDom.render(<App></App>, document.getElementById('root'));
