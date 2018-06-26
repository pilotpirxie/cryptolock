# cryptolock 
A simple library for an encryption and decryption files

[![GitHub stars](https://img.shields.io/github/stars/pilotpirxie/cryptolock.svg?style=social&label=Star)](https://github.com/pilotpirxie/cryptolock)
[![npm](https://img.shields.io/npm/dt/cryptolock.svg)](https://www.npmjs.org/package/cryptolock)

Cryptlock uses native built-in Crypto module and 'AES-256-CBC' algorithm.

### Quick start
Installation
```js
npm install --save cryptolock
```

Usage
```js
// import
const crlock = new Cryptolock();

// encryption
crlock.encrypt('file.jpg', 'encrypted.dat', 'password');

// decryption
crlock.decrypt('encrypted.dat', 'decrypted.jpg', 'password');
```
