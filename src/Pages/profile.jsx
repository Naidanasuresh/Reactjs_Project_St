
import useUserStore from '../Stores/useUserStore'

const Profile = () => {

  const currentUser=useUserStore((state)=>state.user)
  return (
    <div>
      {
        currentUser.name
      }
    </div>
  )
}

export default Profile
