import * as path from 'path'

import { run } from 'spikit'

// Set the root of the project
// This path contains the public, resources and app directories
let projectRoot = path.resolve(__dirname, '..')
let appRoot = path.resolve(__dirname)

run(projectRoot, appRoot)