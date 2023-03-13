import app from "./app";
import { sequelize } from "./config/dbConfig";
import createRoles from "./models/Role";

async function main() {
    try {
        await sequelize.sync({force: false});
        console.log('DB is connected');
        await createRoles();
        app.listen(5000);
        console.log('Server is listening on port', 5000);
    } catch(err) {
        console.error(err);
    }
}

main();