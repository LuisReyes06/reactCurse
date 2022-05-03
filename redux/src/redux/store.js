import { createStore } from "redux";
import reducer from './reducers';

const initialState = {
    todos: [
        {
            id: 0,
            name: "Ir al gimnasio",
            complete: false,
        },
        {
            id: 1,
            name: "Lavar la ropa",
            complete: true,
        },
    ],
};

export const store = createStore(
    reducer,
    initialState,
    window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_()
)