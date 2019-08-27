
export default class Watcher {
  // Vue component
  vm;

  expOrFn;
  cb;

  // Array of dep
  deps = [];

  constructor(vm, expOrFn, cb) {
    this.vm = vm
    this.expOrFn = expOrFn
    this.cb = cb
  }

  addDep(dep) {
    dep.addSub(this)
  }

  update() {
    this.cb()
  }
}