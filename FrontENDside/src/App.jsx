
import { useEffect, useState } from 'react'
import './App.css'


function App() {

  const [users, setUser] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(response => response.json())
      .then(data => setUser(data))
  }, [])

  const handleOnSubmit = event => {
    event.preventDefault()
    const name = event.target.name.value
    const email = event.target.email.value
    const user = { name, email }
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  }
  return (
    <>

      <h1>Users Management</h1>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="name" placeholder="Enter name" /><br />
        <input type="text" name="email" placeholder="Enter email" />
        <input type="submit" />
      </form>
      <p>Data from server : {users.length} users</p>

    </>
  )
}

export default App
