const fs = require("fs");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const main = async () => {
  fs.writeFileSync("./1.js", "Test");

  const { stdout, stderr } = await exec("ls");
  if (stderr) {
    console.log(stderr);
  } else {
    console.log(
      stdout
        .split("\n")
        // Remove last empty string
        .filter((fileName) => fileName)
        .join(", ")
    );
  }
};

main();
