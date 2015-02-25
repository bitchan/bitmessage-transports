/**
 * A few helper routines.
 * @module bitmessage-transports/util
 */

"use strict";

exports.assert = function(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
};

exports.PROTOCOL_VERSION = 3;
