import * as glob from 'glob'

import { init, start } from 'spikit'
import view from './config/view'
import app from './config/app'
import server from './config/server'
import sass from './config/sass'

import Kernel from './http/Kernel'

init({
  app: app,
  view: view,
  static: app.static,
  server: server,
  sass: sass,
  kernel: Kernel
})

// Load an import our routes
glob(__dirname + '/routes/**/*.js', (err, files: string[]) => {
  files.forEach(file => require(file))
  start()
})
