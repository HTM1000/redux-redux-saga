import { ICartState } from './modules/cart/types';
import { legacy_createStore, applyMiddleware } from "redux";
import rootReducer from "./modules/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/rootSaga';

export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]

const store = legacy_createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
)

 sagaMiddleware.run(rootSaga);

export default store;