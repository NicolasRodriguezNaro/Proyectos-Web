import {useState, useEffect} from 'react'
import './App.css'

import Header from './Components/Header/Header.jsx'
import CardUser from './Components/CardUser/CardUser.jsx'

const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
    .then(response => response.json())
    .then(data => setUsers(data));
  },[])


  return (
    <>
      <Header />
      <main>
        {users.map((item) => {
          return(
            <CardUser key={item.id} name={item.login} image={item.avatar_url} url={item.html_url}/>
          )
        })}
      </main>
    </>
  )
}

export default App