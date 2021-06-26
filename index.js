/*!
 * Caron dimonio, con occhi di bragia
 * loro accennando, tutte le raccoglie;
 * batte col remo qualunque s’adagia 
 *
 * Charon the demon, with the eyes of glede,
 * Beckoning to them, collects them all together,
 * Beats with his oar whoever lags behind
 *          
 *          Dante - The Divine Comedy (Canto III)
 */

//module.exports = require('./lib/http-proxy');

PORT = process.env.PORT || 8000;

var http = require('http'),
httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

http.createServer(function(req, res) {
  proxy.web(req, res, {target:req.url, prependPath:false})
}).listen(process.env.PORT || 8000);

console.log("Server started on port "+process.env.PORT);
