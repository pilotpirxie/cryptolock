const Cryptolock = require('../index');
const chai = require('chai');
const assert = chai.assert;
const fs = require('fs');

const crlock = new Cryptolock();

describe('Encrypt', function() {
    it('should encrypt file', function() {
        assert.equal(crlock.encrypt('test/test.jpg', 'test/out.dat', 'secretpassword').message, 'Encrypted!');
    });

    it('should create out.dat file', function() {
        assert.equal(fs.existsSync('test/out.dat'), true);
    });
});

describe('Decrypt', function() {
    it('should decrypt file', function() {
        assert.equal(crlock.decrypt('test/out.dat', 'test/test2.jpg', 'secretpassword').message, 'Decrypted!');
    });

    it('should create test2.jpg file', function() {
        assert.equal(fs.existsSync('test/test2.jpg'), true);
    });
});
