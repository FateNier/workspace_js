import Action from "./action";

const initalState = {
  tasks: [],
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case Action.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, {
                ...action.payload,
                id: Date.now(),
            }
        ],
      };
    case Action.DELETE_TASK:
        return {
            ...state,
            tasks: action.payload
          }; 
    case Action.COMPLETE_TASK:
    return {
            ...state,
            tasks: action.payload
        }; 
    default:
      return state;
  }
}