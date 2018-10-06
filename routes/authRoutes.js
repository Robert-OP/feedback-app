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

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  // look to check which user is logged in
  app.get("/api/current_user", (req, res) => {
    // res.send(req.session );
    res.send(req.user);
  });
};
