export const inputValidation = (email, password, name, isSignIn) => {
  const isValidEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(
    password
  );
  if (!isValidEmail) return `Invalid Email`;
  if (!isValidPassword)
    return `Password must contain 1 uppercase 1 lowercase and 1 digit`;
  if (!isSignIn && !name?.length) return `Name should not be empty`;
  return null;
};
