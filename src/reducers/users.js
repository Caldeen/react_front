

const users = (state = [], action)=>{
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
          return response.text()
        }).then(data=>console.log(data))

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
            localStorage.setItem('token',response.headers.get('session'))
            return response.json()
        }).then(data=>{
            console.log(data)
            localStorage.setItem('user',data.username)
        })
        
        
      return state
      case "LOGOUT":
      fetch('https://aqueous-savannah-82662.herokuapp.com/api/logout', {
        method: 'GET',
        headers: { 'SESSION': localStorage.getItem('token') }
        })
        .then(response => {
            return response.text()
        }).then(data=>{
            localStorage.clear()
            console.log(data)
        })
        
      return state
      default:
      return state
    }
}


export default users