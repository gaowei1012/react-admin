import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import AdminRouter from './router';
import { Provider } from 'react-redux';
import configuerStore from './redux/store/configuerStore';
import registerServiceWorker from './registerServiceWorker';

const store = configuerStore();

ReactDOM.render(
    <Provider store={store}>
        <AdminRouter/>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
