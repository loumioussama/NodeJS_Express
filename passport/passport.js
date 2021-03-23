const passport = require("passport");
const BearerStrategy = require("passport-http-bearer").Strategy;
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

passport.use(new BearerStrategy(async(token, done) => {
    const decodedData = await jwt.verify(token, 'secret');
    console.log(decodedData);
     User.findOne({ _id: decodedData.userId }, function (err, user) {
       if (err) { return done(err); }
       if (!user) { return done(null, false); }
       return done(null, user, { scope: 'all' });
     });
   }
 ));