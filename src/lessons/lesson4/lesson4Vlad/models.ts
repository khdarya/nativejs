export enum FilterTodoListType {
    ALL = 'ALL',
    DONE = 'DONE',
    IN_PROGRESS = 'InProgress'
}

export type PayLoadType = {
    [key: string]: any;
}

export type Action = {
    type: string;
    payload: PayLoadType
};

export type TodoListType = {
    id: number | string,
    title: string,
    filter: 'All'
};

export type TodoListsType = {
    [key: string]: TodoListType
}

type TaskType = {
    id: string | number,
    title: string,
    isDone: boolean,
}

export type TaskListsType = {
    [key: string]: Array<TaskType>
}

export type StateType = {
    [key: string]: TaskListsType | TodoListsType;
}

export enum TODO_LISTS_ACTION_TYPE  {
    ADD_NEW_TODO_LIST = 'ADD_NEW_TODO_LIST',
    ADD_NEW_TASK = "ADD_NEW_TASK",
}


