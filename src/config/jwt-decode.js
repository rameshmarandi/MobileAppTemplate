var jwtDecode = require('jwt-decode');


var token = 'eyJ0eXAiO.../// jwt token';


var decoded = jwtDecode(token);