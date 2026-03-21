const validate = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);
  if (!emailRegex) return "Email is not valid";
  if (!passwordRegex) return "Password is not valid";

  return null;
};

export default validate;
