const {MongoClient} = require('mongodb');
async function main(){
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri = "mongodb+srv://suatkuran:EPIKtetos80@cluster0.t1kyp.mongodb.net/scraper?retryWrites=true&w=majority";

  const client = new MongoClient(uri, { useUnifiedTopology: true } );

  try {
      // Connect to the MongoDB cluster
      await client.connect();
      console.log("cncted")

      // Make the appropriate DB calls
      await  listDatabases(client);

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

let nameOfListing = "Tanzimat Edebiyatı 2"; 
async function findOneListingByName(client, nameOfListing) {
  result = await client.db("scraper").collection("collection1")
                      .findOne({ title: nameOfListing });

  if (result) {
      console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
      console.log(result);
  } else {
      console.log(`No listings found with the name '${nameOfListing}'`);
  }
}