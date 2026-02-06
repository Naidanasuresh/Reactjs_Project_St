import { Account, ID } from "appwrite"
import appwriteClient from "."

class AppwriteAccount{
    constructor(){
        this.appwriteAccount=new Account(appwriteClient)
    }

        async createNewUser(data){
            const newUser=await this.appwriteAccount.create({
                userId:ID.unique(),
                ...data
            })
            
            return newUser
        }

        async loginWithEmailAndPassword(data){
            const loginUserSession=await this.appwriteAccount.createEmailPasswordSession({
                ...data

            })
            return loginUserSession;
        }

        async getCurrentUser(){
             
                const currentUser=await this.appwriteAccount.get()
                return currentUser

        }

       

    
    

}

export default AppwriteAccount