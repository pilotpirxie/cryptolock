const crypto = require('crypto'),
    fs = require('fs'),
    Buffer = require('buffer').Buffer;

class Cryptolock {

    /**
     * Encrypt and decrypt file with passphrase
     * @param {string} algorithm
     */
    constructor(algorithm = 'aes-256-cbc') {
        this.algorithm = algorithm;
    }

    /**
     * Encrypt file
     * @param {string} inputFile
     * @param {string} outputFile
     * @param {string} passphrase
     * @returns {{message: string}}
     */
    encrypt(inputFile, outputFile = 'out.dat', passphrase) {
        try {
            let text = fs.readFileSync(inputFile);
            const cipher = crypto.createCipher(this.algorithm, passphrase);
            const encrypted = Buffer.concat([cipher.update(Buffer.from(text, "utf8")), cipher.final()]);
            fs.writeFileSync(outputFile, encrypted);
            return { message: "Encrypted!" };
        } catch (exception) {
            throw new Error(exception.message);
        }
    }

    /**
     * Decrypt file
     * @param {string} inputFile
     * @param {string} outputFile
     * @param {string} passphrase
     * @returns {{message: string}}
     */
    decrypt(inputFile = 'out.dat', outputFile = 'decoded.dat', passphrase) {
        try {
            let text = fs.readFileSync(inputFile);
            const decipher = crypto.createDecipher(this.algorithm, passphrase);
            const decrypted = Buffer.concat([decipher.update(text), decipher.final()]);
            fs.writeFileSync(outputFile, decrypted);
            return { message: "Decrypted!" };
        } catch (exception) {
            throw new Error(exception.message);
        }
    }
}

module.exports = Cryptolock;