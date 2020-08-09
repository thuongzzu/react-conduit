import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from "./sagas/index";
import thunk from 'redux-thunk'


const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware,thunk]
const enhancers = [applyMiddleware(...middleWares)]
const composeEnhancers = composeWithDevTools(...enhancers)

const store = createStore(
    rootReducer,
    composeEnhancers 
    );

    sagaMiddleware.run(rootSaga)
export default store;   
