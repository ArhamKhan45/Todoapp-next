import mongoose from "mongoose";

const Databaseconnect = async () => {
  await mongoose
    .connect(process.env.db_url, {
      dbName: "Mytodo",
    })
    .then((data) => {
      console.log(`Connected to database successfully ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
export default Databaseconnect;
