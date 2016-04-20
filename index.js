
var enc = encodeURIComponent;

module.exports = {
  body2Query: function(body) {
    body = body || {};
    var query = Object.keys(body).map(function(k) {
      return enc(k) + '=' + enc(body[k]);
    });
    return '?' + query.join('&');
  }
};
