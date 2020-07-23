
export function getDateString(unixTime) {
  let date = new Date(unixTime * 1000);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    + `, ${date.getHours() % 12 === 0 ? 12 : date.getHours() % 12}`
    + `:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`
    + ` ${date.getHours() > 11 ? 'PM' : 'AM'}`;
}