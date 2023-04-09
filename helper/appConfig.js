const passport = require('passport');

// Require Model
const User = require("../models/User");

const LocalStrategy = require("passport-local").Strategy;

// Serialize Function
// Saving the data to the session.
// Id is a unique identifier
passport.serializeUser(function (user, done) { 
    done(null, user.id);
 });

// Deserialize Function
// Reading the information from the database according to the user id from session
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user){
        done(err, user);
    });
});


passport.use(new LocalStrategy({
    usernameField: "emailAddress",
    passwordField: "password"
},
    function(emailAddress, password, done) {
      User.findOne({ emailAddress: emailAddress }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));

// Exports
module.exports = passport;