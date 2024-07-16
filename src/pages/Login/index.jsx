import { connect } from "my-redux-connect";
import { LoginAction, LogoutAction } from "./store";

function Login({ currentUser, login, logout }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const username = e.target[0]?.value;
    const password = e.target[1]?.value;
    login(username, password);
  };

  const handleLogout = () => {
    logout(currentUser);
  };

  return (
    <div
      style={{
        height: "200px",
        backgroundColor: "lightgreen",
        textAlign: "center",
      }}
    >
      <h2>DEMO LOGIN</h2>
      {!currentUser ? (
        <form onSubmit={handleSubmit}>
          <div>
            username： <input placeholder="请输入username" required />
          </div>
          <div id="username" style={{ marginTop: "20px" }}>
            pasword：
            <input placeholder="请输入password" type="password" required />
          </div>
          <div id="password" style={{ marginTop: "20px", textAlign: "center" }}>
            <button type="submit">login</button>
          </div>
        </form>
      ) : (
        <>
          <h2> 您已登陆! </h2>
          <button onClick={handleLogout}>logout</button>
        </>
      )}
    </div>
  );
}

const mapStateToProps = ({ user: { username, token } }) => ({
  currentUser: username,
});
const mapDispatchToProps = (dispatch) => ({
  login: (username, password) =>
    dispatch(
      LoginAction({
        username,
        password,
      })
    ),
  logout: (username) =>
    dispatch(
      LogoutAction(username)
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
