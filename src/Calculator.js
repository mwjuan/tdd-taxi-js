export default class Calculator {
  calc(receipt) {
    this.basics = 6;
    if (receipt.distance > 2) {
      this.basics += (receipt.distance - 2) * 0.8;
    }
    if (receipt.distance > 8) {
      this.basics += (receipt.distance - 8) * 0.4;
    }
    return Math.round(this.basics + receipt.time * 0.25);
  }
}
