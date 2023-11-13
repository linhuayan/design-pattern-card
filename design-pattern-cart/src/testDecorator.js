function logged(value, { kind, name }) {
  if (kind === "method") {
    return function (...args) {
      console.log(`starting ${name} with arguments ${args.join(", ")}`);
      const ret = value.call(this, ...args);
      console.log(`ending ${name}`);
      return ret;
    };
  }
}

export default class C {
  @logged
  m(arg) {}
}

new C().m(1);
// starting m with arguments 1
// ending m

console.log('decorator');