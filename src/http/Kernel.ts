import { Locale, Auth } from 'spikit'

export default class Kernel {
  /**
   *----------------------------------------------------------------------------
   * Middleware
   *----------------------------------------------------------------------------
   *
   * The application's global HTTP middleware stack.
   *
   * The middleware listed here is run during every request to your application.
   */
  public static readonly middleware = [
    Locale
  ]

  /**
   *----------------------------------------------------------------------------
   * Middleware Groups
   *----------------------------------------------------------------------------
   *
   * This is a list of groups that only run on defined middleware groups
   */
  public static readonly middlewareGroups = {
    web: [],
    api: []
  }

  /**
   *----------------------------------------------------------------------------
   * Middleware Groups
   *----------------------------------------------------------------------------
   *
   * This is a list of groups that only run on defined middleware groups
   */
  public static readonly routeMiddleware = {
    auth: Auth
  }
}