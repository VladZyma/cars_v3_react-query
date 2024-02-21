const userRegexp = {
  NAME: /^[a-zA-Z]\w{1,19}$/,
  PASSWORD: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{5,20}$/,
};

export { userRegexp };
