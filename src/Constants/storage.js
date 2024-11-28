export const setLocalData = (key, value) => {
  return localStorage.setItem(key, value);
};

export const getLocalData = (key) => {
  return localStorage.getItem(key);
};


export const removeLocalData = (key) => {
    return localStorage.removeItem(key);
}

export const setSessionData = (key, value) => {
    return sessionStorage.setItem(key, value);
  };
  
  export const getSessionData = (key) => {
    return sessionStorage.getItem(key);
  };
  
  export const removeSessionData = (key) => {
    return sessionStorage.removeItem(key);
  };
  