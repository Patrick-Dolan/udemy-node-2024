// This helper function returns the root directory
const path = require('path');

module.exports = path.dirname(require.main.filename);