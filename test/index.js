'use strict';

const cryp = require('../');
const fs = require('fs');
const path = require('path');

const encode = () => {
  const input = fs.createReadStream(path.join(__dirname, './input.txt'));
  const output = fs.createWriteStream(path.join(__dirname, './output.txt.cryp'));

  const start = Date.now();
  return cryp.encode({
    readable: input,
    writable: output
  }).then(() => {
    // eslint-disable-next-line
    console.log('encode done! time:', `${Date.now() - start}ms`);
  }).catch(e => {
    // eslint-disable-next-line
    console.log(e);
  });
};

const decode = () => {
  const input = fs.createReadStream(path.join(__dirname, './output.txt.cryp'));
  const output = fs.createWriteStream(path.join(__dirname, './input.txt'));

  const start = Date.now();
  return cryp.decode({
    readable: input,
    writable: output
  }).then(() => {
    // eslint-disable-next-line
    console.log('decode done! time:', `${Date.now() - start}ms`);
  }).catch(e => {
    // eslint-disable-next-line
    console.log(e);
  });

};

// 加密之后再解密
(async () => {
  await encode();
  await decode();
})();
