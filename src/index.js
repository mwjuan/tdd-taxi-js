import Receipt from './Receipt';

export default function main(testDataFile = 'testData.txt') {
  return new Receipt(testDataFile).parse();
}

main();
