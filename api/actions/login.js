import passport from 'passport';

export default function login(req) {
  return new Promise(( resolve, reject) => {
    passport.authenticate('login', (err, user, info) => {
      if (err) {
        return reject(err);
      }

      const errorMsg = 'Incorrect username or password'; // info.message;
      if (!user) {
        console.log(info.message);

        return reject({
          message: errorMsg,
          status: 403
        });
      }

      req.logIn(user, (loginErr) => {
        console.log(loginErr);
        if (loginErr) {
          return reject('Issue logging in.');
        }
        resolve(user);
      });
    })(req);
  });
}
