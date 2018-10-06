const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

// fetch model class User out of mongoose, used to create a new mondel instance & save it to the 'users' collection
const User = mongoose.model("users");

// encode - user parameter comes from done(null, user) after the (user) authentication (below)
passport.serializeUser((user, done) => {
  // user.id is not profile.id, user.id is the unique mongo assigned ID
  done(null, user.id);
});

// decode - comes from the browser, take the id and convert it to the user model
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// passport.js used to redirect user for authentication with google
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // we already have that record/user with the given google profile ID, resume authentication with done()
          done(null, existingUser);
        } else {
          // we don't have the user, make a new record, then resume authentication
          // User is one instance, user is the second instance (updated), but they represent the same underlined model or record
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
