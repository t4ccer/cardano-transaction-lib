"use strict";

exports.decodeUtf8 = buffer => {
  var result;
  var fatalDecoder = new TextDecoder("utf-8", { fatal: true });
  var decoder = new TextDecoder("utf-8");
  var error = false;

  try {
    result = fatalDecoder.decode(buffer);
  } catch (_) {
    result = decoder.decode(buffer);
    error = true;
  }

  return { result, error };
};
