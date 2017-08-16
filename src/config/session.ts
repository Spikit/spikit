export default {
  /**
   *----------------------------------------------------------------------------
   * Session Lifetime
   *----------------------------------------------------------------------------
   *
   * The number of minutes that you would like the session to be allowed to
   * remain idle before it expires. If you want the session to immediately
   * expire when the browser closes you can set that here.
   */
  lifetime: 120,
  expireOnClose: false,

  /**
   *----------------------------------------------------------------------------
   * Session Cookie Path
   *----------------------------------------------------------------------------
   *
   * The path for which the cookie will be regarded as available.
   */
  path: '/',

  /**
   *----------------------------------------------------------------------------
   * Session Cookie Domain
   *----------------------------------------------------------------------------
   *
   * This will determine which domains the cookie is available to in your application.
   */
  domain: null,

  /**
   *----------------------------------------------------------------------------
   * Session Cookie Secure
   *----------------------------------------------------------------------------
   *
   * By setting this to true, sessions will only be sent back to the server
   * if the browser has a HTTPS connection
   */
  secure: false
}