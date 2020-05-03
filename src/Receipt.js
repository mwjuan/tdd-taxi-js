import fs from 'fs';
import path from 'path';
import Calculator from './Calculator';

export default class Receipt {
	constructor(file) {
		this.fixFile(file);
		this.calculator = new Calculator();
		this.dataSource = [];
	}

	fixFile(file) {
		if (!file) {
			throw new Error('invalid file');
		}
		this.file = path.join('./src/fixtures', file);
	}

	parse() {
		this.fileContent = fs.readFileSync(this.file, 'utf-8');
		this.fileContent = this.fileContent.split(/\n/);
		this.verify();
		this.transform();
		return this.format();
	}

	verify() {
		try {
			this.fileContent.forEach(data => {
				const [d, t] = data.match(/^(\d+)公里,等待(\d+)分钟$/).slice(1, 3);
				this.dataSource.push({ distance: Number(d), time: Number(t) });
			});
		} catch (error) {
			throw error;
		}
	}

	transform() {
		this.dataSource = this.dataSource.map(each => this.calculator.calc(each));
	}

	format() {
		return this.dataSource.map(each => `收费${each}元`).join('\n');
	}
}
