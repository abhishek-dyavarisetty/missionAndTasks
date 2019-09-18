const isObjectEmpty = obj => {
  if (Object.entries(obj).length === 0 && obj.constructor === Object) {
    return true;
  } else {
    return false;
  }
};

const isNullDependency = arr => {
  if (Array.isArray(arr) && arr.length) {
    return false;
  } else {
    return true;
  }
};

module.exports = {
  isObjectEmpty,
  isNullDependency
};
