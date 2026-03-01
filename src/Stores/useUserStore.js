// import { create } from "zustand"

// const useUserStore=create((set)=>({
//     user:{},
//     setUser:(currentUser)=>set({user:currentUser})
// }))

// export default useUserStore;





import { create} from "zustand";

const useUserStore=create((set)=>({
    User:{},
    setUser: (currentUser)=>set({User: currentUser}),

    logoutUser:()=>set({User:{}})
}))

export default useUserStore;