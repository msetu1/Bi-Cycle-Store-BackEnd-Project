import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        app.listen(config.port, () => {
            console.log(`Bi Cycle Store BackEnd Project on port ${config.port}`)
          })
    } catch (error) {
        console.error(error)
    }
  }

main();