exports.render = function (layer, callback) {
  callback(JSON.stringify(layer, null, 2))
}
