const { MongoClient, ServerApiVersion } = require("mongodb");

CONNECTION_URL = "put your mongodb uri string";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(CONNECTION_URL, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);

const data = {
    "firstName": "santu",
    "lastName": "mondal",
    "phoneNumber": "1234569870"
};
async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        const database = await client.db("NODEJS");
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        // Get the database and collection on which to run the operation
        //const database = client.db("sample_mflix");
        const user = database.collection("User");

        const findData = await user.find({}).toArray();
        console.log("user collection data", findData);

        // const insertdata = await user.insertMany([data]);
        // console.log("inserdated data successfull", insertdata);

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}



run().catch(console.dir);