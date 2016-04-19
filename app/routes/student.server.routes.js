var students = require('../../app/controllers/student.server.controller');
var index = require('../controllers/index.server.controller');

var passport = require('passport');

module.exports=function(app){
    app.route('/signup').get(students.renderSignup)
                        .post(students.signup);
      
    
     app.route('/signin').get(students.renderSignin)
                        .post(passport.authenticate('local',{
                            successRedirect: '/student',
                            failureRedirect: '/signin',
                            failureFlash: true
                        }));     
                        
    app.route('/empsignup').get(students.renderSignupEmp)
                        .post(students.signupEmp);
      
    
     app.route('/empsignin').get(students.renderSigninEmp)
                        .post(passport.authenticate('local',{
                            successRedirect: '/',
                            failureRedirect: '/empsignin',
                            failureFlash: true
                        }));              
  
    
    app.get('/signout', students.signout);
    
  
    
  //  app.get('/',index.render);
};


