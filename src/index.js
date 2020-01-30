import React from 'react';
import App from './App';
import ReduxThunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import cartReducer from './components/reducers/cartReducer';
import { mainReducer } from './components/reducers/mainReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';
import './index.scss';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}

const rootReducer = combineReducers({ main: mainReducer, cart: cartReducer })

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [ReduxThunk];

export const store = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);

let persistor = persistStore(store);

// persistor.purge();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
