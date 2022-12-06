import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import axios from "axios";

// Тут список пользователей: https://reqres.in/api/users

function App() {
    const [users, setUsers] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [searchValue, setSearchValue] = React.useState('')
    const [invites, setInvites] = React.useState([])

    React.useEffect(() => {
        fetch(`https://reqres.in/api/users`)
            .then((res) => res.json())
            .then((json) => {
                setUsers(json.data)
            }).catch(err => {
                console.warn(err)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [])

    const onChangeValue = (event) => {
        setSearchValue(event.target.value)
    }
    const onClickInvite = (id) =>{
        if (invites.includes(id)) {
            setInvites(prev => prev.filter(_id => _id !== id))
        } else {
            setInvites(prev => [...prev, id])
        }
    }

  return (
    <div className="App">
            <Users invites={invites} onClickInvite={onClickInvite} searchValue={searchValue} onChangeValue={onChangeValue} users={users} isLoading={isLoading}/>
        {/*/* <Success /> */}
    </div>
  );
}

export default App;
