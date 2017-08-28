export default {
  enabled: true,
  session: {
    secret: 'my-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: new Date(Date.now() * 2),
      secure: false,
      httpOnly: true
    }
  }
}