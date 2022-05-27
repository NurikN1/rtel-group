export const isAuthorized = () => {
  return !!localStorage.getItem('isAuthorized');
};

export const setIsAuthorized = (value) => {
  localStorage.setItem('isAuthorized', value);
};
