export async function queryHeaderInfo(){
    return await new Promise(resolve=>{
        setTimeout(() => {
            resolve('HEADER INFO FROM MOCK SERVER!')
        }, 2000);
    })
}