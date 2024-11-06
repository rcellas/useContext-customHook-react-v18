import { UserContext } from "./UserContext"

const UserProvider = ({children}) => {
    const user = "Kaito"
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider