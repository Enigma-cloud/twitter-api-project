import { DashboardActionTypes } from "./dashboard.types";

const INITIAL_STATE = {
    searchedUserProfile: ''
};

const dashboardReducer = (currentState=INITIAL_STATE, action) => {
    switch(action.type) {
        case DashboardActionTypes.SEARCH_USER_PROFILE:
            return {
                ...currentState,
                searchedUserProfile: action.payload,
            };
        default:
            return currentState;
    }
};

export default dashboardReducer;