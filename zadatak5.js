const https = require("https");

const main = () => {
  https
    .get("https://reqres.in/api/users?page=2", (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        console.log(
          JSON.parse(data)
            .data.map((el) => el.first_name)
            .join(", ")
        );
      });
    })
    .on("error", (error) => {
      console.log(error);
    });
};

main();
