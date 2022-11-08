import _ from "lodash";

export const isSerializable = (data) => {
  if (
    _.isUndefined(data) ||
    _.isNull(data) ||
    _.isBoolean(data) ||
    _.isNumber(data) ||
    _.isString(data)
  ) {
    return true;
  }

  if (!_.isPlainObject(data) && !_.isArray(data)) {
    return false;
  }

  for (var key in data) {
    if (!isSerializable(data[key])) {
      return false;
    }
  }

  return true;
};
