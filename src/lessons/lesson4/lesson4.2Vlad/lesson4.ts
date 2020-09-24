import {
    Action,
    FilterTodoListType,
    PayLoadType,
    StateType,
    TaskListsType, TaskType,
    TODO_LISTS_ACTION_TYPE,
    TodoListsType
} from "./models";

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
            id: 1,
            title: 'Learn LESS',
            isDone: true,
        },
        {
            id: 0,
            title: 'Learn SASS',
            isDone: false,
        },
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
        dispatch: (action: Action) => {
            state = reducer(state, action)
        },
        getState: () => state,
    }
}

function combineReducers(reducerMap: { [s: string]: any; } | ArrayLike<unknown>) {
    return function combinationReducers(state: any, action: Action) {
        return Object.entries(reducerMap).reduce((acc, [key, reducer]) => {
            // @ts-ignore
            return {
                ...acc,
                [key]: state ? reducer(state[key], action) : reducer(undefined, { type: 'asdad', payload: {} })
            }
        }, {})
    }
}


function todoListReducer(state: TodoListsType = initialTodoLists, action: Action = {
    type: 'sdgsgsg',
    payload: {}
}): TodoListsType {
    switch (action.type) {
        case TODO_LISTS_ACTION_TYPE.ADD_NEW_TODO_LIST: {
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        }

        case TODO_LISTS_ACTION_TYPE.CHANGE_TODO_LIST_FILTER_TYPE_BY_ID: {
            return {
                ...state,
                [action.payload.todoListId]: {
                    ...state[action.payload.todoListId],
                    filter: action.payload.filter,
                }
            }
        }

        case TODO_LISTS_ACTION_TYPE.DELETE_TODO_LIST_BY_ID: {
            return Object.keys(state)
                .filter((key: string) => Number(key) !== action.payload.todoListId)
                .reduce((acc, key) => ({ ...acc, [key]: state[key] }), {});
        }

        case TODO_LISTS_ACTION_TYPE.CHANGE_TODO_LIST_TITLE_BY_ID: {
            return {
                ...state,
                [action.payload.todoListId]: {
                    ...state[action.payload.todoListId],
                    title: action.payload.title,
                }
            }
        }

        default:
            return state;
    }
}

function taskListReducer(state: TaskListsType = initialTaskLists, action: Action): TaskListsType {
    // switch (action.type) {
    //     case TODO_LISTS_ACTION_TYPE.ADD_NEW_TODO_LIST: {
    //         return {
    //             ...state,
    //             [action.payload.id]: []
    //         };
    //     }
    //
    //     case TODO_LISTS_ACTION_TYPE.ADD_NEW_TASK: {
    //         return {
    //             ...state,
    //             [action.payload.todoListId]: [...state[action.payload.todoListId], action.payload.task],
    //         }
    //     }
    //
    //     case TODO_LISTS_ACTION_TYPE.DELETE_TASK_BY_ID: {
    //         return {
    //             ...state,
    //             [action.payload.todoListId]: state[action.payload.todoListId]
    //                 .filter((task: TaskType) => task.id !== action.payload.taskId)
    //         }
    //     }
    //
    //     case TODO_LISTS_ACTION_TYPE.CHANGE_TITLE_TASK_BY_ID: {
    //         return {
    //             ...state,
    //             [action.payload.todoListId]: state[action.payload.todoListId]
    //                 .map((task: TaskType) => task.id === action.payload.taskId ?
    //                     ({...task, title: action.payload.title}): task)
    //         }
    //     }
    //
    //     case TODO_LISTS_ACTION_TYPE.CHANGE_TASK_STATUS_BY_ID: {
    //         return {
    //             ...state,
    //             [action.payload.todoListId]: state[action.payload.todoListId]
    //                 .map((task: TaskType) => task.id === action.payload.taskId ?
    //                     ({...task, isDone: !task.isDone}): task)
    //         }
    //     }
    //
    //     case TODO_LISTS_ACTION_TYPE.DELETE_TODO_LIST_BY_ID: {
    //         return Object.keys(state)
    //             .filter((key: string) => Number(key) !== action.payload.todoListId)
    //             .reduce((acc, key) => ({...acc, [key]: state[key]}), {})
    //     }
    //
    //     default:
    //         return state;
    // }
    const actionMap: { [key: string]: Function } = {
        [TODO_LISTS_ACTION_TYPE.ADD_NEW_TODO_LIST]: (): TaskListsType => ({
            ...state,
            [action.payload.id]: []
        }),
        [TODO_LISTS_ACTION_TYPE.ADD_NEW_TASK]: (): TaskListsType => ({
            ...state,
            [action.payload.todoListId]: [...state[action.payload.todoListId], action.payload.task]
        }),
        [TODO_LISTS_ACTION_TYPE.DELETE_TASK_BY_ID]: (): TaskListsType => ({
            ...state,
            [action.payload.todoListId]: state[action.payload.todoListId]
                .filter((task: TaskType) => task.id !== action.payload.taskId)
        }),
        [TODO_LISTS_ACTION_TYPE.CHANGE_TITLE_TASK_BY_ID]: (): TaskListsType => ({
            ...state,
            [action.payload.todoListId]: state[action.payload.todoListId]
                .map((task: TaskType) => task.id === action.payload.taskId ?
                    ({ ...task, title: action.payload.title }) : task)
        })

    }

    return actionMap[action.type] && actionMap[action.type]() || state;
}

const store = createStore(reducer);

function createAction(type: string) {
    return function (payload: { [key: string]: unknown }): Action {
        return { type, payload }
    }
}


//1. add new todoList.
const addNewTodoListAction = createAction(TODO_LISTS_ACTION_TYPE.ADD_NEW_TODO_LIST);
// const newTodoList = {id: 2, title: 'Learn Angular', filter: FilterTodoListType.ALL};
store.dispatch(addNewTodoListAction({ id: 2, title: 'Learn Angular', filter: FilterTodoListType.ALL }));

//2. add new task in according todoList id = 2.
// {title: 'Learn RhJS', isDone: false, id: 0}
const addNewTask = createAction(TODO_LISTS_ACTION_TYPE.ADD_NEW_TASK);
store.dispatch(addNewTask({ task: { title: 'Learn RhJS', isDone: false, id: 0 }, todoListId: 2 }))


//3. change filter type on 'Done' from enum FilterType in according todoList id = 2.
const changeFilterTypeById = createAction(TODO_LISTS_ACTION_TYPE.CHANGE_TODO_LIST_FILTER_TYPE_BY_ID);
store.dispatch(changeFilterTypeById({ todoListId: 2, filter: FilterTodoListType.DONE }))


//4. delete task in according todoList id = 0, taskId = 1.
const deleteTaskByID = createAction(TODO_LISTS_ACTION_TYPE.DELETE_TASK_BY_ID);
store.dispatch(deleteTaskByID({ todoListId: 0, taskId: 1 }));


//5. change title in task (id 1) in according todoList (id:1)..
const changeTaskTitleById = createAction(TODO_LISTS_ACTION_TYPE.CHANGE_TITLE_TASK_BY_ID);
store.dispatch(changeTaskTitleById({ taskId: 1, todoListId: 1, title: 'Learn forest!!!' }))


//6. change field isDone in task(id:1) in according todoList(id:1).
const changeTaskStatusById = createAction(TODO_LISTS_ACTION_TYPE.CHANGE_TASK_STATUS_BY_ID);
store.dispatch(changeTaskStatusById({ taskId: 1, todoListId: 1 }))


//7. delete todoList by id = 0.
const deleteTodoListById = createAction(TODO_LISTS_ACTION_TYPE.DELETE_TODO_LIST_BY_ID);
store.dispatch(deleteTodoListById({ todoListId: 0 }))


//8. change title in todoList by id = 1.
const changeTodoListTitle = createAction(TODO_LISTS_ACTION_TYPE.CHANGE_TODO_LIST_TITLE_BY_ID);
store.dispatch(changeTodoListTitle({ todoListId: 1, title: 'Learn Redux' }));


console.log(store.getState());

