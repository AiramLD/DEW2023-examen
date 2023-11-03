const Activity = require('./activity');

class Instructor {
  #salarioBase;

  constructor(name, salarioBase = 500) {
    this.name = name;
    this.#salarioBase = salarioBase;
    this.ledActivities = [];
  }

  get salary() {
    return this.#salarioBase;
  }

  lead(activity) {
    if (activity instanceof Activity) {
      activity.instructor = this;
      this.ledActivities.push(activity);
    }
  }
}

module.exports = Instructor;
