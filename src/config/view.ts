import * as path from 'path'

export default {
  /**
   *----------------------------------------------------------------------------
   * View Engine
   *----------------------------------------------------------------------------
   *
   * Here we can set the view engine that we would like to use. We will set this
   * to pug as this is the default for rendering.
   */
  engine: 'pug',

  /**
   *----------------------------------------------------------------------------
   * View Engine Path location
   *----------------------------------------------------------------------------
   *
   * Here is where we set the default location of where the views will be stored.
   * You can add/remove locations of the views depending on your needs.
   */
  paths: [
    path.join(process.cwd(), 'resources/views')
  ]
}