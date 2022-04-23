export default function login(){
  return(
    <div>
      <h1>Login</h1>
      <form id="login-form-id">
        <label for="loginusernameID">Username</label>
        <input type="text" placeholder="Example" id="loginusernameID"></input>
        <br></br>
        <label for="loginPasswordID">Password</label>
        <input type="password" placeholder="Example" id="loginPasswordID"></input>
        <br></br>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}