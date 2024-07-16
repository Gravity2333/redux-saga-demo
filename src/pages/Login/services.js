const USERS = {
  admin: "12345",
  adm: "12345",
  liuze: "12345",
};

export async function authorize({ username, password }) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (USERS[username] === password) {
        resolve({
          username: username,
          token: +new Date(),
        });
      } else {
        reject({
          err: "authorize err!",
        });
      }
    }, 200);
  });
}

export async function LogoutUser(username){
    return await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 200);
      });
}