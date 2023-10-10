import { useContext } from "react"
import { AuthContext } from "../../Hook/AuthProvider"

const Info = () => {
    const { user} = useContext(AuthContext)

    return (
        <div>
            <h1>{user.email}</h1>
        </div>
    )
}

export default Info