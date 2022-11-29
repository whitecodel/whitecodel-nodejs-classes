class UserController {
  constructor(name) {
    this.name = name;
  }

  // set the name
  set name(name) {
    this._name = name;
  }

  // get the name
  get tmpName() {
    return this._name;
  }
}

module.exports = UserController;
