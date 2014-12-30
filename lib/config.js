module.exports = {
    default_server: 'yahoo',

    geoip_url: 'http://www.telize.com/geoip',

    baidu: {
        key: 'F1Ewi3PGkW6gv9I5cIXDYZby',
        url_base: 'http://api.map.baidu.com/telematics/v3/weather?output=json'
    },

    woeid: {
        geo: 'http://query.yahooapis.com/v1/public/yql?',
        location: 'http://where.yahooapis.com/v1/places.q'
    },

    yahoo: {
        key: 'dj0yJmk9YnBHdXdMampTRGZkJmQ9WVdrOWMySTVOMUU0Tm1VbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1hOQ--',
        url_base: 'http://query.yahooapis.com/v1/public/yql?'
    }
}