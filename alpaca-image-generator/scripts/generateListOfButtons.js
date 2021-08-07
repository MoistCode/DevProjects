(() => {
    const testFolder = './public/assets/images/';
    const fs = require('fs');
    fs.readdir(testFolder, (err, files) => {
        fs.writeFileSync('./selection.txt', '', err => {
            if (err) {
              console.error(err, 'Cannot delete contents.');
              return
            }
        });

        if (err) {
            console.error(err);
            return;
        }

        files.forEach(file => {
            const newPath = `${testFolder}/${file}`;

            if (fs.lstatSync(newPath).isDirectory()) {
                fs.readdir(newPath, (readDirErr, files) => {
                    if (readDirErr) {
                        console.error(readDirErr);
                        return;
                    }

                    let content = `<label class="uppercase" for="${file}">${file}</label>\n<select name="${file}" id="${file}">\n`;

                    files.forEach(innerFile => {
                        let text = innerFile.replace('.png', '').replace('-', ' ');
                        content += `\t<option value="${text}">${text}</option>\n`;
                    });

                    content += '</select>\n\n';

                    fs.appendFileSync('./selections.txt', content, err => {
                        if (err) {
                          console.error(err)
                          return
                        }

                        console.log('Buttons siccessfully generated.');
                    });
                });
            } 
        });
    });
})();