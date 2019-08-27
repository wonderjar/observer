
import { Dep } from './dep'

export default class Observer {

  constructor(value) {
    this.walk(value)
  }

  walk(obj) {
    for(let key of Object.keys(obj)) {
      this.defineReactive(obj, key)
    }
  }

  defineReactive(obj, key) {
    const dep = new Dep()

    Object.defineProperties(obj, {
      [key]: {
        enumerable: true,
        configurable: true,
        get() {
          if (Dep.target) {
            dep.depend()
          }
          return this.value
        },
        set(newVal) {
          this.value = newVal
          dep.notify()
        }
      }
    })
  }

}

