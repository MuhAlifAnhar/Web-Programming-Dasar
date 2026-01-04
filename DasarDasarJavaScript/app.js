// import { mkdir } from 'node:fs';

const fs = require('fs');
const folderName = process.argv[2] || 'project';

// fs.mkdir('project', {
//     recursive: true
// }, (err) => {
//     console.log('di dalam callback');
//     if (err)
//         throw err;
// });

try {
    fs.mkdirSync(folderName);

    console.log('setelah fungsi mkdir');

    fs.writeFileSync(`${folderName}/yey.html`, '');

    fs.writeFileSync(`${folderName}/y.html`, '');

    fs.writeFileSync(`${folderName}/ey.html`, '');

    console.log('berhasil');
} catch (error) {
    console.log(error);
}