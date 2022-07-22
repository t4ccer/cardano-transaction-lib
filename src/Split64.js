"use strict";

exports.decodeUtf8 = buffer => {
  var result;
  var decoder = new TextDecoder("utf-8");
  var error = false;

  try {
    result = decoder.decode(buffer, { fatal: true });
  } catch (error) {
    result = decoder.decode(buffer);
    error = true;
  }

  return { result, error };
};
