const fileSystem = require("fs");
fileSystem.writeFile("./welcome.txt", "Hello Node", (error) => {
  if (error) {
    return console.log(error);
  }
});

fileSystem.readFile("./welcome.txt", { encoding: "utf8" }, (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data);
});
