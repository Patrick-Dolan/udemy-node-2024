const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');
const dataPath = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = (cb) => {
  fs.readFile(dataPath, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    return cb(JSON.parse(fileContent));
  });
}

module.exports = class Product {
  constructor(title, imageURL, description, price) {
    this.title = title;
    this.imageURL = imageURL;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(dataPath, JSON.stringify(products), (err) => {
        if (err) console.log(err)
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}