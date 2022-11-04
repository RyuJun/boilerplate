import fs from 'fs';
import { pascalCase } from 'change-case';
import path from 'path';

function fromDir(startPath, filter, res = []) {
  if (!fs.existsSync(startPath)) { 
    console.error('no dir', startPath);
    return [];
  }

  const files = fs.readdirSync(startPath);
  for (let i = 0; i < files.length; i += 1) {
    const filename = path.join(startPath, files[i]);
    const stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      fromDir(filename, filter, res);
    } else if (filename.endsWith(filter)) {
      const componentName = pascalCase(filename.replace('src/pages/', '').replace('.tsx', '').replace(/\[/g, '$').replace(/\]/g, '')
        , { stripRegexp: /[^A-Z0-9$]/gi }).replace(/(?<=\$)\w/g, (d) => d.toUpperCase()) + 'Page';
      const pathName = filename.replace('src/pages', '').replace('.tsx', '').replace(/\[/g, ':').replace(/\]/g, '');
      res.push([
        (componentName.match(/^\d/) ? 'e' : '') + componentName,
        pathName.replace('index', ''),
        filename.replace('src/pages', '@/pages')]);
    }
  }
  return res.sort((a, b) => a[2].length - b[2].length).sort((a, b) => a[2].replace(/\[|\]/g, '').localeCompare(b[2].replace(/\[|\]/g, '')));
}


const pageRoutes = () => fromDir('./src/pages', '.tsx');

const componentMaker = (pages) => `import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
${pages.map(page => `import ${page[0]} from '${page[2].replace('.tsx', '')}';`).join('\n')}

const CustomRouter = (props = {}) => <BrowserRouter>
  <Routes {...props}>
    ${pages.map(page => `<Route key="${page[0]}" path="${page[1]}" element={<${page[0]}/>} />`).join('\n    ')}
  </Routes>
</BrowserRouter>;

export default CustomRouter;
`;

fs.writeFileSync('src/Routes.tsx', componentMaker(pageRoutes()));
