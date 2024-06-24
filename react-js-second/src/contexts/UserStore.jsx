import {useState,useEffect} from 'react'
import {usersContext} from './usersContexts'
function UserStore({children}) {
    let [users,setUsers]=useState([])

    async function getUsers()
    {
        let res=await fetch("https://jsonplaceholder.typicode.com/users")
        let usersList=await res.json()
        setUsers(usersList)
    }
    useEffect(()=>{
        getUsers()
    },[])
  return (
    <usersContext.provider value={{users,setUsers}}>
        {children}
    </usersContext.provider>
  )
}

export default UserStore