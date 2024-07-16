import { connect } from "my-redux-connect";
import { fetchHeaderInfoAction } from "./store/actionCreators";
import { useEffect } from "react";

function Header({ headerInfo, username, fetch }) {
  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "lightgray",
        position: "relative",
      }}
    >
      {headerInfo}
      <span style={{ position: "absolute", right: "10px" }}>
        {username ? `登录名:${username}` : "未登录"}
      </span>
    </div>
  );
}

const mapStateToProps = ({ header: { headerInfo }, user: { username } }) => ({
  headerInfo,
  username,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchHeaderInfoAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
