module.exports = function(server){
    return [
        // {
        //     register: require('ot-hapi-statsd'),
        //     options: settings.statsd[env]
        // },
        // // {
        // //     register: require('hapi-ot-logger'),
        // //     options: settings.logger[env]
        // // },
        // {
        //     register: require('hapi-route-auto-reg'),
        //     options: {
        //         directory: "./src/plugins/routes"
        //     }
        // },
        // {
        //     register: require('./middlewares/cors'),
        //     options: {}
        // },
        // {
        //     register: require('./middlewares/pause'), //I dont get this plugin BEN - DS
        //     options: {}
        // },
        {
            register: require('./middleware/versioning'),
            options: {
                pattern: /^(v[1-9])$/
            }
        },
        // {
        //     register: require("hapi-service-discovery"),
        //     options: settings.discovery[env]
        // },
        // {
        //     register: require('./routes/v1'),
        //     options:{}
        // }
    ];
};