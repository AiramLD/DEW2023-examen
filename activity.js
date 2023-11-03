const service = require('./service');

class activity extends service {
  #instructor = null;

  constructor(name) {
    super(name);
    this.instructor = null;
  }

  setInstructor(instructor) {
    this.instructor = instructor;
  }

  ledBy(instructor) {
    this.instructor = instructor;
  }
}

module.exports = activity;
