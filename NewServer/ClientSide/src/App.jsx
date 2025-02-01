
import { application } from 'express'
import './App.css'

function App() {
  // const handleSubmit = e => {
  //   const form = e.target
  //   const name = form.name.value
  //   const email = form.email.value
  //   const user = { name, email }
  //   fetch("https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch", {
  //     method: 'POST',
  //     headers: {
  //       'content-type': "application/json"
  //     },
  //     body: JSON.stringify(user)

  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //     })
  // }


  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" />
        <input type="email" name="email" id="email" />
        <input type="submit" value="SUBMIT NOW" />
      </form>
    </>
  )
}

export default App
