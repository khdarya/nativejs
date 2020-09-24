import {Action, FilterTodoListType, PayLoadType, StateType, TaskListsType, TodoListsType} from "./models";
console.log('lesson 4 works');

const initialTodoLists: TodoListsType = {
    0: {
        id: 0,
        title: 'Learn react',
        filter: 'All'
    },
    1: {
        id: 1,
        title: 'Learn CSS',
        filter: 'All'
    },
};
const initialTaskLists: TaskListsType = {
    0: [
        {
            id: 0,
            title: 'Learn hooks',
            isDone: false
        },
        {
            id: 1,
            title: 'Learn useEffect',
            isDone: true,

        }
    ],
    1: [
        {
            id: 0,
            title: 'Learn SASS',
            isDone: false,
        },
        {
            id: 1,
            title: 'Learn LESS',
            isDone: true,
        }
    ],
};

const reducer = combineReducers({
    todoList: todoListReducer,
    taskList: taskListReducer,
})
function createStore(reducer: { (state: any, action: Action): {}; (arg0: any, arg1: Action): any; }) {
    // @ts-ignore
    let state: StateType = reducer()
    return {
        dispatch: (action: Action) => { state = reducer(state, action) },
        getState: () => state,
    }
}
function combineReducers(reducerMap: { [s: string]: unknown; } | ArrayLike<unknown>) {
    return function combinationReducers(state: any, action: Action) {
        return Object.entries(reducerMap).reduce((acc,[key, reducer])=> {
            // @ts-ignore
            return { ...acc, [key]: state ? reducer(state[key], action) : reducer(undefined, {type: 'asdad', payload: {}})} }, {})
    }
}


function todoListReducer(state: TodoListsType = initialTodoLists, action: Action = {type:'sdgsgsg',payload:{}}): TodoListsType {
    switch (action.type) {
        case 'addTodoList': {
            return {
                ...state,
                [action.payload.id]: {
                    ...action.payload
                }
            }
        }
        default:
            return state;
    }
}
function taskListReducer(state: TaskListsType = initialTaskLists, action: Action ): TaskListsType {
    switch (action.type) {
        default:
            return state;
    }
}

const store = createStore(reducer);

function createAction(type: string) {
    return function (payload: {[key: string] : unknown}): Action {
        return {type, payload}
    }
}


const addTodoList: (payload: PayLoadType) => Action = createAction('addTodoList');



store.dispatch(addTodoList({id: 2, title: 'vlad', filter: FilterTodoListType.ALL}))


//1. add new todoList.
//2. add new task in according todoList.
//3. change filter type in according todoList.
//4. delete task in according todoList.
//5. change title in task in according todoList..
//6. change field isDone in task in according todoList.
//7. delete todoList by id.
//8. change title in todoList by id.


















