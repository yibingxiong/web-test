const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const SERVER = path.join(SRC, 'server');
const FE = path.join(SRC, 'fe');

module.exports = {
    ROOT,
    SRC,
    SERVER,
    FE,
}

