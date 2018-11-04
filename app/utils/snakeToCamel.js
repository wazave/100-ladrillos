const snakeToCamel = s => s.replace(/(_\w)/g, m => m[1].toUpperCase());

const objectSnakeToCamel = x => {
  const result = {};
  Object.keys(x).forEach(key => {
    result[snakeToCamel(key)] = x[key];
  });
  return result;
};

export default snakeToCamel;
export { objectSnakeToCamel, snakeToCamel };
