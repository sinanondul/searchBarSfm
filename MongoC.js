define (function(require){
  const { MongoClient } = require("mongodb");
  const uri = "mongodb+srv://suatkuran:EPIKtetos80@cluster0.t1kyp.mongodb.net/scraper?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  async function main(){
    try {
      await client.connect();
      await client.db("admin").command({ping: 1});
      console.log ("Successful");
    } finally {
      await client.close();
    }
  }

main().catch(console.dir);
});

//   async function listDatabases(){
//     databasesList = await client.db().admin().listDatabases();
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
//   };

 //});
