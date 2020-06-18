const folderDir = "./";
const fs = require("fs");
var path = require("path");

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}
var scriptName = path.basename(__filename);

fs.readdirSync(folderDir).forEach((file) => {
  if (scriptName == file) {
    return;
  }
  const fileNameArray = file.split(".");
  const extension = fileNameArray.pop();
  const fileName = fileNameArray.join();
  const sluggedName = convertToSlug(fileName);
  fs.rename(`./${file}`, `./${sluggedName}.${extension}`, function (err) {
    if (err) console.log("ERROR: " + err);
  });
});
