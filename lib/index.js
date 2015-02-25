/**
 * Library entry point. Just reexports all available transports.
 * @module bitmessage-transports
 */

"use strict";

/** [Base transport.]{@link module:bitmessage-transports/base} */
exports.BaseTransport = require("./base");

/** [TCP transport.]{@link module:bitmessage-transports/tcp} */
exports.TcpTransport = require("./tcp");

/** [WebSocket transport.]{@link module:bitmessage-transports/ws} */
exports.WsTransport = require("./ws");
