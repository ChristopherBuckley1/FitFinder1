/* GET 'home' page */
const home = function(req, res)
{
    res.render('index', 
        { title: 'Fitfinder', 

            pageHeader: 
            {
                subtext: 'Your gateway to fitness'
            },

            card1:
            {
                locationName: 'Kerry sports academy',
                tags: ['Fitness Classess', 'Full Gym','Swimming pool'],
                distance: 200,
                kidFriendly: true
            },

            card2:
            {
                locationName: 'X-TREAM BJJ',
                tags: ['Martial Arts', 'Gym Facilities','Fitness classes', 'Jiu Jitsu', 'Brazilian Jiu Jitsu'],
                distance: 373,
                kidFriendly: false
            },

            card3:
            {
                locationName: 'BUG Sports',
                tags: ['Extreme Powerlifting', 'Muay Thai','Karate', 'Jiu Jitsu', 'Brazilian Jiu Jitsu','Stunts','Juice Bar'],
                distance: 793,
                kidFriendly: false
            },

            card4:
            {
                locationName: 'Pump Town Fitness',
                tags: ['Olyhmpic Gym', 'Fitness Classes','Judo'],
               distance: 901
            },
            card5:
            {
                locationName: '5% Fitness',
                tags: ['BodyBuilding', 'Powerlifting','Juice Bar'],
               distance: 979
            },

            card6:
            {
                locationName: 'Knockout Boxing Gym',
                tags: ['Boxing', 'Gym','Shower Facilities Available'],
               distance: 993
            },
            card7:
            {
                locationName: 'MaxxxSmash Wrestling + Combat Sports',
                tags: ['Boxing', 'Krav Maga','Systema','Kung Fu','Stunts'],
               distance: 997
            }


        });

};

    /* GET 'Login' page */
    const logIn = function(req, res){
    res.render('login', { title: 'Log in' });
    };
    /* GET 'Register' page */
    const register = function(req, res){
    res.render('register', { title: 'Register' });
    };
    module.exports = {
    home,
    logIn,
    register
    };
    
    