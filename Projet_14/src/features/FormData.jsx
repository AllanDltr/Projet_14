import { department } from "../datas/employees";

export const initialState = {
    firstName:"",
    lastName:"",
    dateOfBirth:"",
    startDate:"",
    street:"",
    city:"",
    state:"",
    zipCode:"",
    department:"",
}

export const input = "changeInput";

export const changeInput = (id, value) => ({
    type: input,
    id:id,
    value:value
});

export function reducer (state = initialState, action) {
    if (action.type === input) {
        return {
            ...state,
            [action.id]: action.value
        }
    }
    return state;
}