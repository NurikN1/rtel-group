export const getMappedRows = (rows) => {
  return rows
    .trim()
    .split('\n')
    .map((row) => {
      const [key, value] = row.split('**');
      return { key, value };
    });
};
