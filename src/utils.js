export async function login({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "regan" && password === "password") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
