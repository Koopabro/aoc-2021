import * as fs from 'fs';

// load file from disk and return it as a string
const loadFile = (filePath: string): string => {
  return fs.readFileSync(filePath, 'utf8');
};

export default loadFile;