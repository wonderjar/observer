
export function pushTarget (target) {
  Dep.target = target
}

export function popTarget () {
  Dep.target = null
}

export class Dep {
  // Watcher
  static target;

  // Array of watcher
  subs = [];

  addSub(sub) {
    this.subs.push(sub)
  }

  removeSub(sub) {
    const index = this.subs.indexOf(sub)
    if (index > -1) {
      this.subs.splice(index, 1)
    }
  }

  depend() {
    Dep.target.addDep(this)
  }

  notify() {
    for (let sub of this.subs) {
      sub.update()
    }
  }
}

Dep.target = null