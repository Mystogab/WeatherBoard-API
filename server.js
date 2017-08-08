const express = require('express'),
    app = require("./app"),
    port = process.env.PORT || 3000;

app.listen(port);

console.log('WeatherBoard Backend API running on port: ' + port);
