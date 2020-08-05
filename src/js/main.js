// // import images
// const requireContext = require.context("../images", true, /^\.\/.*\.png$|^\.\/.*\.jp?g$|/);
// requireContext.keys().map(requireContext);


class Animal {
  constructor(name) {
      this.name = name;
  }
  getName() {
      return this.name;
  }
}

const dog = new Animal('dog');