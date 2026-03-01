// import { Account, ID } from "appwrite"
// import appwriteClient from "."




// class AppwriteAccount{
//     constructor(){
//         this.appwriteAccount=new Account(appwriteClient)
//     }

//         async createNewUser(data){
//             const newUser=await this.appwriteAccount.create({
//                 userId:ID.unique(),
//                 ...data
//             })
            
//             return newUser
//         }

//         async loginWithEmailAndPassword(data){
//             const loginUserSession=await this.appwriteAccount.createEmailPasswordSession({
//                 ...data

//             })
//             return loginUserSession;
//         }

//         async getCurrentUser(){
             
//                 const currentUser=await this.appwriteAccount.get()
//                 return currentUser

//         }

       

    
    

// }

// export default AppwriteAccount





import { Account , ID} from "appwrite";
import appwriteClient from ".";

class AppwriteAccount{
    constructor(){
        this.appwriteAccount= new Account(appwriteClient)

    }

    async createNewUser(data){
        const newUSer=await this.appwriteAccount.create({
            userId:ID.unique(),
            ...data
        })
        return newUSer;
    
    
      
    }
    async LoginUserSession(data){
            const loginUser=  await this.appwriteAccount.createEmailPasswordSession({
                ...data
            })
            return loginUser;
        }
        

    async getCurrentUser(){
        const currentUser=await this.appwriteAccount.get()
        return currentUser;
    }


    async logoutUser(){
        const logoutUser=await this.appwriteAccount.deleteSession({
    sessionId: "current"    
});
            
       
        console.log(this.logoutUser)
        return logoutUser;
    }
}

export default AppwriteAccount;