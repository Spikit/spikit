/**
 *----------------------------------------------------------------------------
 * DO NOT MODIFY
 *----------------------------------------------------------------------------
 *
 * You should not modify this file unless you know what you are doing.
 * Modifying this file can break the initialization and execution of the library.
 */
import * as path from 'path'

// Import the spikit initializer.
// This will initialize spikit and start the spikit server.
import { run } from 'spikit'

// Set the root of the project and the project app
run(path.resolve(__dirname, '..'), path.resolve(__dirname))