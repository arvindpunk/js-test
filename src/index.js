export const repeat = (f, n, ...args) => {
  if (n <= 0) return [];
  return [f(...args), ...repeat(f, n - 1, ...args)];
};
