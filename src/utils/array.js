function ramoveObjectFromArrayById(arr, id) {
  arr.splice(
    arr.findIndex((el) => el.id === id),
    1
  );
}
export { ramoveObjectFromArrayById };
