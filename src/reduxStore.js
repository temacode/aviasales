import { combineReducers, createStore, applyMiddleware } from 'redux';
import mainReducer from './reducers/mainReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducecrs = combineReducers({
    main: mainReducer,
    form: formReducer,
});

let store = createStore(reducecrs, applyMiddleware(thunkMiddleware));

export default store;