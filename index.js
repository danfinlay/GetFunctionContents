module.exports = function(targetFunc){
  var funcString = targetFunc.toString();
  var functionStart = funcString.indexOf('{');
  var functionEnd = funcString.lastIndexOf('}');

  return funcString.slice(functionStart+1, functionEnd);
}