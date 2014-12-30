var color      = require('cli-color');
var request    = require('request');
var Grid       = require('term-grid');

var config     = require('./config');
var util       = require('./util');

exports.get = function(location) {

    var requestUrl = config.baidu.url_base + '&location=' + location + '&ak=' + config.baidu.key;

    request({
        url: requestUrl,
        method: 'GET',
        json: true
    }, function(err, res, body) {
        if (!err && res.statusCode == 200) {
            // 返回 error
            if (body.error !== 0) {
                console.log(color.red('baidu api return: ') + color.redBright(body.status));
                return;
            }
            util.clear();
            show(body);
            return;
        } else {
            console.log(color.red('baidu api request error'));
            return;
        }
    })
}


function show(data) {

    console.log(color.green('-->') + ' 今天是 - ' + color.bold(data.date) + ' - ' + color.bold(data.results[0].currentCity));

    var pm = data.results[0].pm25;
    if (pm) {
        if (pm <= 50) {
            console.log(color.green('  - PM2.5: ') + color.green(pm + '  优'));
        } else if (pm >= 51 && pm <= 100) {
            console.log(color.green('  - PM2.5: ') + color.yellow(pm + '  良'));
        } else if (pm >= 101 && pm <= 150) {
            console.log(color.green('  - PM2.5: ') + color.xterm(202)(pm + '  轻度污染'));
        } else if (pm >= 151 && pm <= 200) {
            console.log(color.green('  - PM2.5: ') + color.redBright(pm + '  中度污染'));
        } else if (pm >= 201 && pm <= 300) {
            console.log(color.green('  - PM2.5: ') + color.magenta(pm + '  重度污染'));
        } else if (pm >= 300) {
            console.log(color.green('  - PM2.5: ') + color.red(pm + '  严重污染'));
        }
    }

    var weatherData = data.results[0].weather_data;
    var len = weatherData.length;
    var arr = [];

    for (var i = 0; i < len; i++) {
        arr.push(['  - ' + weatherData[i].date, weatherData[i].temperature, weatherData[i].weather, weatherData[i].wind]);
    }
    
    var grid = new Grid(arr);

    grid.setColor(0, "green");
    grid.draw();

    return;
}
