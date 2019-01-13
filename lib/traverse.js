const fs = require('fs');


/*
 Async function to recursively traverse a directory structure
 */
async function traverse(directory){
	
    // list files in directory and loop through
    fs.readdirSync(dir).forEach((file) => {

        // builds full path of file
        const fPath = path.resolve(dir, file);

        // prepare stats obj
        const fileStats = { file, path: fPath };

        // is the file a directory ? 
        // if yes, traverse it also, if no just add it to the result
        if (fs.statSync(fPath).isDirectory()) {
            fileStats.type = 'dir';
            fileStats.files = [];
            result.push(fileStats);
            return traverse(fPath, fileStats.files)
        }

        fileStats.type = 'file';
        result.push(fileStats);
    });
    return result;
};
}