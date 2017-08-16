import { Locale } from 'spikit'

export default class Kernel {
  protected middleware = [
    Locale
  ]

  protected middlewareGroups = {
    web: [],
    api: []
  }
}