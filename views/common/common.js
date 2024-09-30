//Revealing Module Pattern:IIFE
var common = (function () {
  var BASE_URL = "http://127.0.0.1:8000";
  return {
    getBaseUrl: function () {
      return BASE_URL;
    },
  };
})();
