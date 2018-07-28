import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import AdminRouter from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AdminRouter />, document.getElementById('root'));
registerServiceWorker();
