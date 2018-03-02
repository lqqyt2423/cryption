'use strict';

const crypto = require('crypto');

const allAlgorithms = crypto.getCiphers();

const encode = ({ readable, writable, algorithm = 'aes192', password }) => {
  if (allAlgorithms.indexOf(algorithm) === -1) return Promise.reject(new Error('请输入正确的算法名称'));
  if (!password) {
    password = 'password';
    // eslint-disable-next-line
    console.log('已使用默认密码');
  }

  const cipher = crypto.createCipher(algorithm, password);
  readable.pipe(cipher).pipe(writable);
  return new Promise((resolve, reject) => {
    writable.on('finish', resolve);
    writable.on('error', reject);
  });
};

const decode = ({ readable, writable, algorithm = 'aes192', password }) => {
  if (allAlgorithms.indexOf(algorithm) === -1) return Promise.reject(new Error('请输入正确的算法名称'));
  if (!password) {
    password = 'password';
    // eslint-disable-next-line
    console.log('已使用默认密码');
  }

  const decipher = crypto.createDecipher(algorithm, password);
  readable.pipe(decipher).pipe(writable);
  return new Promise((resolve, reject) => {
    writable.on('finish', resolve);
    writable.on('error', reject);
  });
};

exports.encode = encode;
exports.decode = decode;
