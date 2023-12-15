import path from 'path';
import fs from 'fs';

const PARENT_FOLDER_PATH = '/app/blog/';

async function getDirectories(folderPath: string) {
  const cwd = process.cwd();
  const parentFolderPath = path.join(cwd, folderPath);
  console.log(parentFolderPath, 'parentFolderPath');
  if (!fs.existsSync(parentFolderPath)) return null;

  const files = fs.readdirSync(parentFolderPath);

  // console.log('err ', err);
  console.log('files ', files);
  const directories = files.filter((file) =>
    fs.statSync(`${parentFolderPath}/${file}`).isDirectory(),
  );
  console.log('directories', directories);
  return directories;
}

export default async function BlogPage() {
  const paths = await getDirectories(PARENT_FOLDER_PATH);
  console.log('paths ', paths);
  return <div>hello blog test </div>;
}
