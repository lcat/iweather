var publicIp = require('public-ip');
var geoip    = require('geoip-lite')

publicIp(function (err, ip) {
    console.log(ip);
    var geo = geoip.lookup(ip);
    console.log(geo)
});
module.exports = function() {

}