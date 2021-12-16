import useFirestore from "hooks/useFirestore"
import defaultAvatar from "assets/images/avatar_placeholder.png"
import { Link } from "react-router-dom"

const UserBadge = () => {
  const { userData } = useFirestore()

  if (!userData) return null

  return (
    <div className="mb-4 w-full rounded-2xl pt-2 px-4 flex items-center">
      <div className="w-8 h-8 bg-gray-200 rounded-lg overflow-hidden mr-3">
        <Link to={`/user/${userData.username}`}>
          <img
            className="object-cover w-full h-full"
            src={userData.avatar || defaultAvatar}
            alt={`${userData.username}'s Avatar`}
          />
        </Link>
      </div>
      <h4 className="text-md font-bold font-primary">
        <Link className="text-main-700" to={`/user/${userData.username}`}>
          @{userData.username}
        </Link>
      </h4>
    </div>
  )
}

export default UserBadge
