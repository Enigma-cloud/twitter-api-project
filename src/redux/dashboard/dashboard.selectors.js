import { createSelector } from "reselect";

const selectDashboard = state => state.dashboard;

export const selectSearchedUserProfile = createSelector(
    [selectDashboard],
    (dashboard) => dashboard.searchedUserProfile
);