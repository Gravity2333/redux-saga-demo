export async function queryTaskInfo(type,time=400) {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${type} Task Value From Mock Server!`);
    }, time);
  });
}
