import Observer from './index'
import Watcher from './watcher'
import { pushTarget, popTarget } from "./dep";

const watcher1 = new Watcher(null, null, () => { console.log('notified') })
pushTarget(watcher1)

const data = {
  a: 1
}
new Observer(data)

console.log(data.a)

popTarget()

data.a = 2



