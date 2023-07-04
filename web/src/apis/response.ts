export const responseSuccess = (code: string | number) => {
  if (code.toString() === "200") {
    return true;
  }

  return false;
};
