import { combineReducers, createStore } from "redux";
import throttle from "lodash.throttle";
import board from '../features/Board/BoardReducer';
import listsById from '../features/List/ListReducer';
import cardsById from '../features/Card/CardReducer';
import seed from "../utils/seed";


const reducers = combineReducers({
    board,
    listsById,
    cardsById
});

const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch {
    // ignore write errors
    }
};

const loadState = () => {
    try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
        return undefined;
    }
    return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const persistedState = loadState() || {};
const store = createStore(reducers, persistedState);

store.subscribe(
    throttle(() => {
    saveState(store.getState());
    }, 1000)
);


if (!store.getState().board.lists.length) {
    console.log("SEED");
    seed(store);
}

export default store;