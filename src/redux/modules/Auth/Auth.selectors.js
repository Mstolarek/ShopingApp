export const getUser = (state) => state.Auth.user;

export const getUserLoading = (state) => state.Auth.loading;

export const getIsLogedIn = (state) => state.Auth.user !== null;
