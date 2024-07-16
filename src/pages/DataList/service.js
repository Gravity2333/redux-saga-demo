export async function queryDataList(token) {

  return await new Promise((resolve,reject) => {
    if(!token){
      reject({
        err: 'unauthorized'
      })
    }
    setTimeout(() => {
      resolve([
        {
          id: "W0nrtZABY0_q75IYX4Bt",
          name: "test_20240715182331",
          state: 2,
          type: "http",
          result: 0,
          progress: 100,
          filter:
            '{"id":"397819e0-4294-11ef-877b-19edc0948c87","operator":"AND","group":[{"id":"3a0b8040-4294-11ef-877b-19edc0948c87","field":"network_id","fieldText":"网络","operator":"=","operand":"oHe3XJABhAi_Id6UDocW","operandText":"11 (本机)","type":"Array"},{"id":"3c3f9e50-4294-11ef-877b-19edc0948c87","field":"xff","fieldText":"xff","operator":"!= \'\'","operand":"undefined","operandText":"undefined","type":"undefined"}]}',
          filterDsl:
            "(network_id<Array> = \"oHe3XJABhAi_Id6UDocW\" AND xff != '' )",
          time: 379,
          startTime: "2024-07-15T17:53:31+08:00",
          endTime: "2024-07-15T18:23:31+08:00",
          limitSize: 100000,
          description: "",
          operatorId: "3",
          createTime: null,
          updateTime: null,
        },
        {
          id: "WUnrtZABY0_q75IYHYAv",
          name: "test_20240715182314",
          state: 2,
          type: "http",
          result: 0,
          progress: 100,
          filter:
            '{"id":"397819e0-4294-11ef-877b-19edc0948c87","operator":"AND","group":[{"id":"3a0b8040-4294-11ef-877b-19edc0948c87","field":"network_id","fieldText":"网络","operator":"=","operand":"oHe3XJABhAi_Id6UDocW","operandText":"11 (本机)","type":"Array"},{"id":"3c3f9e50-4294-11ef-877b-19edc0948c87","field":"xff","fieldText":"xff","operator":"!= \'\'","operand":"undefined","operandText":"undefined","type":"undefined"}]}',
          filterDsl:
            "(network_id<Array> = \"oHe3XJABhAi_Id6UDocW\" AND xff != '' )",
          time: 537,
          startTime: "2024-07-15T17:53:14+08:00",
          endTime: "2024-07-15T18:23:14+08:00",
          limitSize: 100000,
          description: "",
          operatorId: "3",
          createTime: null,
          updateTime: null,
        },
        {
          id: "VUnqtZABY0_q75IYkYBP",
          name: "test",
          state: 2,
          type: "http",
          result: 0,
          progress: 100,
          filter:
            '{"id":"1df62b80-4294-11ef-877b-19edc0948c87","operator":"AND","group":[{"id":"1ed39330-4294-11ef-877b-19edc0948c87","field":"network_id","fieldText":"网络","operator":"=","operand":"oHe3XJABhAi_Id6UDocW","operandText":"11 (本机)","type":"Array"},{"id":"208b5550-4294-11ef-877b-19edc0948c87","field":"xff","fieldText":"xff","operator":"!= \'\'","operand":"undefined","operandText":"undefined","type":"undefined"}]}',
          filterDsl:
            "(network_id<Array> = \"oHe3XJABhAi_Id6UDocW\" AND xff != '' )",
          time: 298,
          startTime: "2024-07-15T00:00:00+08:00",
          endTime: "2024-07-15T00:00:07+08:00",
          limitSize: 100000,
          description: "",
          operatorId: "3",
          createTime: null,
          updateTime: null,
        },
        {
          id: "DAiTpJABpj4_c7Wrs5eY",
          name: "FLOWLOG_e918aed0-3fee-11ef-8b",
          state: 2,
          type: "flowLog",
          result: 0,
          progress: 100,
          filter:
            '{"id":"e918aed1-3fee-11ef-8bb5-8d5e9afeb010","operator":"AND","group":[]}',
          filterDsl: "",
          time: 48,
          startTime: "2024-07-12T09:04:12+08:00",
          endTime: "2024-07-12T09:34:12+08:00",
          limitSize: 100000,
          description: "",
          operatorId: "3",
          createTime: null,
          updateTime: null,
        },
      ]);
    }, 4000);
  });
}
