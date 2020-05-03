class Calculator {
  calc(distance, time) {
    this.basics = 6;
    this.check(distance, time);
    this.checkRange(distance, time);
    this.getFee(distance);
    this.highwayFee(distance);

    return Math.round(this.basics + time * 0.25);
  }

  check(distance, time) {
    if (!Number.isInteger(distance)) throw new TypeError();
    if (!Number.isInteger(time)) throw new TypeError();
    return this;
  }

  checkRange(distance, time) {
    if (distance < 0 || time < 0) {
      throw new TypeError();
    }
    return this;
  }

  getFee(distance) {
    if (distance > 2) {
      this.basics += (distance - 2) * 0.8;
    }
  }

  highwayFee(distance) {
    if (distance > 8) {
      this.basics += (distance - 8) * 0.4;
    }
  }
}

module.exports = Calculator;
