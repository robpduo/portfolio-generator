import { writeFile } from 'fs';

const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;

const generatePage = (name, github) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>

    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
  </html>
  `;
};

writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;
  console.log(`Portfolio Complete! Check out index.html to see the output!`);
});

https://courses.bootcampspot.com/courses/2193/pages/9-dot-2-5-generate-the-html-file?module_item_id=567800