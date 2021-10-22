const initialState = {
    statuses: [
        {
            id: '60d8a8650f3453003ca52240',
            title: "todo",
        }, {
            id: '60d8a87a0f3453003ca52241',
            title: "progress",
        }, {
            id: '60d8a8910f3453003ca52242',
            title: "review",
        }, {
            id: '60d8a89d0f3453003ca52243',
            "title": "done"
        }
    ],
    tasks: [
        {name: 'task 1', id: 111, description: 'do kanban', status: 'todo', priority: 1},
        {name: 'task 2', id: 112, description: 'do list', status: 'progress', priority: 2},
        {name: 'task 3', id: 113, description: 'do homework', status: 'progress', priority: 3},
        {name: 'task 4', id: 114, description: 'do articles', status: 'review', priority: 4},
        {name: 'task 5', id: 115, description: 'do list of profitable goods', status: 'done', priority: 5},
    ],
    priority: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'CREATE_CARD':
            const newTasks1 = [...state.tasks, action.payload]
            return {...state, tasks: newTasks1};

        case 'CHANGE_STATUS':
            const statusArray = state.statuses.map(el => el.title);
            const newStatus = statusArray[statusArray.indexOf(action.payload.currStatus) + action.payload.direction];
            const newTasks2 = state.tasks.map(el => el.id === action.payload.id ? {...el, status: newStatus} : el);
            return {...state, tasks: newTasks2};

        case 'EDIT_CARD':
            console.log(action.payload)
            const newTasks3 = state.tasks.map(el => el.id === action.payload.id ? action.payload : el);
            return {...state, tasks: newTasks3};

        case 'DELETE_TASK':
            console.log('PAYLOAD:', action.payload)
            const newTasks4 = state.tasks.filter(el => el.id !== action.payload);
            return {...state, tasks: newTasks4};

        case 'CHANGE_PRIORITY':
            const newPriority = state.priority[state.priority.indexOf(action.payload.priority) + action.payload.direction];
            const newTasks5 = state.tasks.map(el => el.id === action.payload.id ? {...el, priority: newPriority} : el);
            return {...state, tasks: newTasks5};

        default:
            return state;
    }
}

export default reducer;