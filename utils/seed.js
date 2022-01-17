const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { usernames } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("...connected!");

  await User.deleteMany({});

  const thoughts = [];
  const friends = [];

  const userData = [];

  for (let i = 0; i < 20; i++) {
    const username = usernames[i];
    const email = `${username}${Math.floor(
      Math.random() * (99 - 18 + 1) + 18
    )}@email.com`;

    console.log(username, email);

    userData.push({
      username,
      email,
      thoughts,
      friends,
    });
  }

  await User.collection.insertMany(userData);

  console.table(User);

  console.info("Seeding complete! 🌱");
  process.exit(0);
});
