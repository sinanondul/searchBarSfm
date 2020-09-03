const {MongoClient} = require('mongodb');

async function main(){
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri = "mongodb+srv://suatkuran:EPIKtetos80@cluster0.t1kyp.mongodb.net/scraper?retryWrites=true&w=majority";

  const client = new MongoClient(uri,  { useUnifiedTopology: true });
//
  try {
      // Connect to the MongoDB cluster
      await client.connect();

      const db = client.db('scraper')

      var mong = db.collection('collection2')
     
      //list all 
      await mong.find({}).toArray(function(err, result){
        if (err) throw err;
          console.log(result)
      });


     
      //import {sv} from './searchbox.js'
      
      //if(sv.target.value.length() >= 2){""
      // var sv = "mac"
      // mong.find({"title": new RegExp(sv,'i')}).toArray(function(err,res){
      //   if (err) throw err;
      //     console.log(res);

      // });
    //await console.log(mong.countDocuments());



    //}
      
      // list all databases
      //await  listDatabases(client);
      //console.log(cursor);
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

