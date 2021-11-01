import { DashboardActionTypes } from "./dashboard.types";

export const searchUserProfile = userProfile => ({
    type: DashboardActionTypes.SEARCH_USER_PROFILE,
    payload: userProfile
});
