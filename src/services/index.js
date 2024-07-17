/** 模拟一个函数，发送一个请求 */
export async function queryMockServerData() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          ipAddress: "10.0.0.0/8",
          description: "",
          name: "10网段保留地址组",
          id: "cqAxd5AB9yKsDwYKyKrM",
        },
        {
          ipAddress: "172.16.0.0/12",
          description: "",
          name: "172.16网段保留地址组",
          id: "c6Axd5AB9yKsDwYKyKrM",
        },
        {
          ipAddress: "192.168.0.0/16",
          description: "",
          name: "192.168网段保留地址组",
          id: "dKAxd5AB9yKsDwYKyKrM",
        },
        {
          ipAddress: "6.6.6.6",
          description: "",
          name: "666",
          id: "iAiYpJABpj4_c7WrsJdP",
        },
        {
          ipAddress: "127.0.0.1",
          description: "",
          name: "本机环回地址",
          id: "caAxd5AB9yKsDwYKyKrM",
        },
        {
          ipAddress: null,
          description: null,
          name: "Other",
          id: "",
        },
      ]);
    }, 2000);
  });
}
