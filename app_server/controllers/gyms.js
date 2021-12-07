const rq = require('request');


const apiOptions = { 
    server : 'http://localhost:3000' 
};

if (process.env.NODE_ENV === 'production') { 
        apiOptions.server = 'fitfinder-chris.herokuapp.com'; 
}




const _renderhomepage = function(req, res, responseBody)
{   console.log(responseBody);
    res.render('index', 
        { title: 'Fitfinder', 

            pageHeader: 
            {
                subtext: 'Your gateway to fitness'
            },

            gyms: responseBody

        });

};

const home = function(req,res){
    const path = '/api/gym'; 

    const requestOptions = { 

    url : apiOptions.server + path, 
    
    method : 'GET', 

    json : {} 

    };
    
    rq(requestOptions, (err, response, body) => { 
        _renderhomepage(req, res,body); 

        } );
    
};

   
    const logIn = function(req, res){

    res.render('login', { title: 'Log in' });

    };
    
    const register = function(req, res){

    res.render('register', { title: 'Register' });

    };

    module.exports = {
    home,
    logIn,
    register
    };
    
    