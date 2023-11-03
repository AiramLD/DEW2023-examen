const Activity = require('./activity');
const Facility = require('./facility');
const Service = require('./service');

class SportCenter {
  #services = [];

  constructor(name, fee, membership = 0) {
    this.name = name;
    this.fee = fee;
    this.membership = membership;
  }

  addService(...services) {
    services.forEach((service) => {
      if (service instanceof Service && !this.#services.includes(service)) {
        this.#services.push(service);
      }
    });
  }

  removeService(service) {
    if (service instanceof Service) {
      const index = this.#services.indexOf(service);
      if (index >= 0) {
        this.#services.splice(index, 1);
      }
    }
  }

  getServices() {
    return this.#services;
  }

  income() {
    return this.fee * this.membership;
  }

  getFacilities() {
    return this.#services.filter((service) => service instanceof Facility);
  }

  getActivities() {
    return this.#services.filter((service) => service instanceof Activity);
  }

  orderServicesBy(field) {
    this.#services.sort((a, b) => a[field] - b[field]);
  }
}

module.exports = SportCenter;
