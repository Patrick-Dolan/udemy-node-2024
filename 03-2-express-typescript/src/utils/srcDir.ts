import path from "path";

const mainFilename = require.main?.filename || "";
export default path.dirname(mainFilename);
