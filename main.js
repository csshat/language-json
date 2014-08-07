exports.render = function (layer, callback) {
  callback(null, JSON.stringify(layer, null, layer.options.indentationSize))
}
