import { UserContext } from "./UserContext"

const user  = {
    id: 123,
    name: 'Nicolas',
    email: 'XW9J0@example.com'
}
export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
  )
}
