import { DashboardActionTypes } from "./dashboard.types";

const INITIAL_STATE = {
    searchedUserProfile: 'Jane Doe'
};

const DashboardReducer = (currentState=INITIAL_STATE, action) => {
    switch(action.type) {
        case DashboardActionTypes:
            return {
                ...currentState,
                searchedUserProfile: action.payload,
            };
        default:
            return currentState;
    }
};

export default DashboardReducer;