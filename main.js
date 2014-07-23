exports.render = function (layer, callback) {
  callback(null, JSON.stringify(layer, null, 2))
}
