// For more information and parameters visit the node-sass and
// node-sass-middleware npm pages:
//
// https://www.npmjs.com/package/node-sass
// https://www.npmjs.com/package/node-sass-middleware

import * as path from 'path'

export default {
  /**
   *----------------------------------------------------------------------------
   * Enabling Sass
   *----------------------------------------------------------------------------
   *
   * If you need to enable or disable sass, it can be done right here. This will
   * not only disable sass, but also disable node-sass-middleware
   */
  enabled: true,

  /**
   *----------------------------------------------------------------------------
   * Sass Source Files
   *----------------------------------------------------------------------------
   *
   * Where are the sass files located? This will take the files that are not
   * prefixed with an underscore, such as "_input.scss" and create css files
   * from them.
   */
  src: path.join(process.cwd(), 'resources/sass'),

  /**
   *----------------------------------------------------------------------------
   * Sass Destination folder
   *----------------------------------------------------------------------------
   *
   * What folder do you want the resulting css files to be saved in?
   */
  dest: path.join(process.cwd(), 'resources/public/css'),

  /**
   *----------------------------------------------------------------------------
   * Sass output style
   *----------------------------------------------------------------------------
   *
   * This is the style that yo would like the resulting css to compile into.
   * The supported formats are as follows:
   *
   * "compact" | "compressed" | "expanded" | "nested"
   */
  outputStyle: 'compressed',

  /**
   *----------------------------------------------------------------------------
   * Sass prefix
   *----------------------------------------------------------------------------
   *
   * Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
   * This is usually set as your last part of the dest. It will tell the sass middleware
   * that any request file will always be prefixed with <prefix> and this prefix should be ignored.
   */
  prefix: '/css'
}