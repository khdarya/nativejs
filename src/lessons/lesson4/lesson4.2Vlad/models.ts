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

export type TaskType = {
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

export enum TODO_LISTS_ACTION_TYPE {
    ADD_NEW_TODO_LIST = 'ADD_NEW_TODO_LIST',
    ADD_NEW_TASK = 'ADD_NEW_TASK',
    CHANGE_TODO_LIST_FILTER_TYPE_BY_ID = 'CHANGE_TODO_LIST_FILTER_TYPE_BY_ID',
    DELETE_TASK_BY_ID = 'DELETE_TASK_BY_ID',
    CHANGE_TITLE_TASK_BY_ID = 'CHANGE_TITLE_TASK_BY_ID',
    CHANGE_TASK_STATUS_BY_ID = 'CHANGE_TASK_STATUS_BY_ID',
    DELETE_TODO_LIST_BY_ID = 'DELETE_TODO_LIST_BY_ID',
    CHANGE_TODO_LIST_TITLE_BY_ID = 'CHANGE_TODO_LIST_TITLE_BY_ID',
}
