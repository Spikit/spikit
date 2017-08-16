import * as glob from 'glob'

import { init, start } from 'spikit'
import view from './config/view'
import app from './config/app'
import server from './config/server'

init({ view: view, static: app.static, server: server })

// Load an import our routes
glob(__dirname + '/routes/**/*.js', (err, files: string[]) => {
  files.forEach(file => require(file))
  start()
})
