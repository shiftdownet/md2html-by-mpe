
const mume = require("@shd101wyy/mume");
//import * as mume from "@shd101wyy/mume"

async function main() {
  await mume.init();

  const engine = new mume.MarkdownEngine({
    filePath: process.argv[2],
    config: {
      enableScriptExecution: true
    }
  });
  await engine.htmlExport({ offline: true, runAllCodeChunks: true });

  return process.exit();
}

main();
 