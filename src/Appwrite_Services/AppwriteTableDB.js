import { TablesDB , ID} from "appwrite";
import appwriteClient from ".";

class AppwriteTabledb{
    constructor(){
        this.tabledb=new TablesDB(appwriteClient)


    }

    async createRecords(dbId,tbId,data){
        const newRecord=await this.tabledb.createRow({
            tableId:tbId,
            databaseId:dbId,
            rowId:ID.unique(),
            data:data
            
            
        
        })
        console.log(newRecord);
        return newRecord

    }

    async getAllRecords(dbId,tbId){
        const records=await this.tabledb.listRows({
            databaseId:dbId,
            tableId:tbId
        })
        return records?.rows

    }
}


export default AppwriteTabledb;

























// import { TablesDB } from "appwrite";
// import appwriteClient from ".";


// class AppwriteTablesDB{
//     constructor(){
//         this.tablesDB = new TablesDB(appwriteClient);

//     }

//     async getallRecords(dbId,tableDb){
//         const records=await this.tablesDB.listRows({
//             databaseId:dbId,
//             tableId:tableDb
//         })
//         return records?.rows
//     }
// }

// export default AppwriteTablesDB;