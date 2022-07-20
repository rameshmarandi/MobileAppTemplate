import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './features';
import Reactotron from '../src/config/ReactotronConfig';

const middlewares = [/* other middlewares */];

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(...middlewares),
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: [Reactotron.createEnhancer()]
})

export default store