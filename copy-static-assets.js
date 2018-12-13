const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const readdir = promisify(fs.readdir);
const copyFile = promisify(fs.copyFile);
const exists = promisify(fs.exists);

const buildDir = path.resolve(__dirname, "./dist");
const staticDir = path.resolve(__dirname, "./src/static/");

(async function () {
    let copyCount = 0;

    try {
        /* sanity checks */
        if(!await exists(buildDir)){
            throw new Error("Unable to locate build directory. \n Initiate a parcel build and try again")
        }
        if(!await exists(staticDir)){
            throw new Error("Unable to locate static assets directory")
        }

        const files = await readdir(path.resolve(staticDir));

        for (fileName of files) {
            const src = path.resolve(staticDir, fileName);
            const dest = path.resolve(buildDir, fileName);

            try {
                await copyFile(src, dest);
            }
            catch (e) {
                throw e;
            }

            console.log(`Copied ${fileName} to /build`);
            copyCount++;
        }
        console.log(`Copied ${copyCount} static asset(s) to dist`);
    }
    catch (e) {
        console.log(e.message);
        console.log("Operation aborted!");
        process.exit(1);
    }
})();