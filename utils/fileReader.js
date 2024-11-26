import fs from "fs";

export const fr = fileName => {
    const content = fs.readFileSync(fileName, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
    });
    return content.split(/\r?\n/);
};
