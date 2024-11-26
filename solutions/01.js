import { fr } from "../utils/fileReader.js";

const input = fr("./input/01_test.txt");

//Input looks like this: 
// [
//     "abc","def","ghi" etc... 
// ]

const buildAlphabet = list => {
    let alphabet = "";
    for (let i = 0; i < list.length; i++) {
        alphabet += list[i];
    }
    return alphabet;
};

export const solution = buildAlphabet(input);
