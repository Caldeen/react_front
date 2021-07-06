

const users = (state = [], action) => {
  switch (action.type) {
    case "REGISTER":

      fetch('https://aqueous-savannah-82662.herokuapp.com/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
          username: action.payload.username,
          password: action.payload.password
        })
      })
        .then(response => {
          return response.json()
        }).then(data => {
          if (data.username !== 'none')
            alert("registered user " + data.username)
          console.log(data)
        })

      return state
    case "LOGIN":

      fetch('https://aqueous-savannah-82662.herokuapp.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
          username: action.payload.username,
          password: action.payload.password
        })
      })
        .then(response => {
          localStorage.setItem('token', response.headers.get('session'))
          return response.json()
        }).then(data => {
          console.log(data)
          if (data.username !== 'none')
            alert("logged in as " + data.username)
          else {
            alert('failed logging in')
          }
          localStorage.setItem('user', data.username)
        })


      return state
    case "LOGOUT":

      fetch('https://aqueous-savannah-82662.herokuapp.com/api/logout', {
        method: 'GET',
        headers: { 'SESSION': localStorage.getItem('token') }
      })
        .then(response => {
          let restText = response.text()
          console.log(restText)
          return restText
        }).then(data => {
          if (data === "logged out")
            alert("successfully logged out")
          localStorage.clear()
          console.log("hello? : " + data)
        })

      return state
    default:
      return state
  }
}


export default users