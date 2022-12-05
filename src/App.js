import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import axios from "axios";

// Тут список пользователей: https://reqres.in/api/users

function App() {
    const [users, setUsers] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        getUsers()
    }, [users])

    async function getUsers() {
       try {
           const response = await axios.get(`https://reqres.in/api/users`)
           setUsers(response.data)
       } catch (e) {
           console.log(e)
        } finally {
           setIsLoading(false)
       }
    }
  return (
    <div className="App">
        {!isLoading ? (
            <Users users={users} isLoading={isLoading}/>
        /* <Success /> */
            ) : ''}
    </div>
  );
}

export default App;
