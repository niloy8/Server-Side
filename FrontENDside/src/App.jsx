
import { useEffect, useState } from 'react'
import './App.css'


function App() {

  // const [users, setUser] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:5000/users')
  //     .then(response => response.json())
  //     .then(data => setUser(data))
  // }, [])

  // const handleOnSubmit = event => {
  //   event.preventDefault()
  //   const name = event.target.name.value
  //   const email = event.target.email.value
  //   const user = { name, email }
  //   fetch('http://localhost:5000/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(user)
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       setUser([...users, data])
  //       event.target.reset()
  //     })
  // }
  return (
    <>

      <h1>Users Management</h1>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="name" placeholder="Enter name" /><br />
        <input type="text" name="email" placeholder="Enter email" /><br />
        <input type="submit" />
      </form>
      <p>Data from server : {users.length} users</p>
      {users.map(user => <p key={user.id}>{user.id} {user.name}</p>)}

    </>
  )
}

export default App
