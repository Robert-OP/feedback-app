const passport = require("passport");

module.exports = app => {
  // specifing what type of information we want to get from google about the user [profile, email]
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // route handler that matches the code with google in order to get the user info [profile, email]
  app.get("/auth/google/callback", passport.authenticate("google"));
};
