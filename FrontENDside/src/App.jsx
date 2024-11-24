
import { useEffect, useState } from 'react'
import './App.css'


function App() {

  const [users, setUser] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(response => response.json())
      .then(data => setUser(data))
  }, [])

  return (
    <>

      <h1>Users Management</h1>
      <p>Data from server : {users.length} users</p>

    </>
  )
}

export default App
