# cryptolock

A simple library for an encryption and decryption files

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
