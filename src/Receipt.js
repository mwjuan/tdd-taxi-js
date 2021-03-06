const os = require('os');
const fs = require('fs');
const path = require('path');
const Calculator = require('./Calculator');

class Receipt {
  constructor(file) {
    this.fixFile(file);
    this.calculator = new Calculator();
    this.dataSource = [];
  }

  fixFile(file) {
    this.file = path.join('./src/fixtures', file);
  }

  parse() {
    this.fileContent = fs.readFileSync(this.file, 'utf-8');
    this.fileContent = this.fileContent.split(os.EOL);
    this.verify();
    this.transform();
    return this.format();
  }

  verify() {
    this.fileContent.forEach(data => {
      const [d, t] = data.match(/^(\d+)公里,等待(\d+)分钟$/).slice(1, 3);
      this.dataSource.push({ distance: Number(d), time: Number(t) });
    });
  }

  transform() {
    this.dataSource = this.dataSource.map(each =>
      this.calculator.calc(each.distance, each.time)
    );
  }

  format() {
    return this.dataSource.map(each => `收费${each}元`).join('\n');
  }
}

module.exports = Receipt;
