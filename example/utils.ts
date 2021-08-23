import _ from 'lodash';
// import * as core from '@serverless-devs/core';
import JSZip from 'jszip';
import fs from 'fs';
import path from 'path';
let zip = new JSZip();

export async function readDir(obj:any, nowPath:any, targetDir:any) {
  try {
    const pathDir = nowPath.split('/');
    const _dir = pathDir[pathDir.length - 1];
    if (_dir.includes('.')) {
      obj.file(_dir, fs.readFileSync(`${nowPath}`));
    } else {
      let files = fs.readdirSync(nowPath);
      files.forEach((fileName, index) => {
        let fillPath = nowPath + '/' + fileName;
        let file = fs.statSync(fillPath);
        if (file.isDirectory()) {
          let dirlist = zip.folder(path.relative(targetDir, fillPath));
          readDir(dirlist, fillPath, targetDir);
        } else {
          obj.file(fileName, fs.readFileSync(fillPath));
        }
      });
    }
  } catch (e) {}
}

export async function startZip(codePath: string): Promise<string> {
  const targetDir = path.resolve(codePath);
  await readDir(zip, targetDir, targetDir);
  const data = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
  });
  fs.writeFile('hello.zip', data, function (err) {
    /*...*/
  });

  return Buffer.from(data).toString('base64');
}