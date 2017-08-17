///<reference path="../typings/index.d.ts" />
import * as path from 'path'

import { run } from 'spikit'

// Set the root of the project
// This path contains the public, resources and app directories

global.projectRoot = path.resolve(__dirname, '/..')
global.appRoot = path.resolve(__dirname)

run()