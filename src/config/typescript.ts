import * as path from 'path'

export default {
  enabled: true,
  tsc: {
    sourceRoot: path.join(process.cwd(), 'resources/typescript'),
    outDir: path.join(process.cwd(), 'public/js'),
    target: 'es6',
    module: 'systems'
  }
}
