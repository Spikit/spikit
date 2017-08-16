import * as path from 'path'
export default {
  /**
   *----------------------------------------------------------------------------
   * App locale
   *----------------------------------------------------------------------------
   *
   * Here is where we set the default locale for the app.
   */
  locale: 'en',
  locales: [
    { en: { name: 'English', iso: 'en' } }
  ],
  static: [path.join(process.cwd(), 'resources/static')]
}