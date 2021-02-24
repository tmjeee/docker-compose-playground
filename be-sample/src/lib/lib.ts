import * as path from 'path'

export const myFunc = () => {
    const basename = path.basename('.');
    console.log(basename);
}