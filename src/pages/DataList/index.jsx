import { connect } from "my-redux-connect"
import { fetchDataListAction } from "./store/actionCreators"

// 展示一下select的使用
function DataList({dataInfos,fetch}){

    return <div style={{textAlign:'center',backgroundColor:'lightskyblue'}}>
        <h2> data list </h2>
        <button onClick={fetch}>query</button>
        <ul>
            {
               dataInfos.map(d=><li key={d.id}>{d.name}: {d.type} - filter: {d.filterDsl}</li>)
            }
        </ul>
    </div>
}

const mapStateToProps = ({data: {dataInfos=[]}})=>({dataInfos})
const mapDispatchToProps = dispatch => ({
    fetch: ()=>dispatch(fetchDataListAction())
})
export default connect(mapStateToProps,mapDispatchToProps)(DataList)