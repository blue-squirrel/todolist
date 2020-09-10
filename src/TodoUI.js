import React  from 'react'
import { Input ,Button,List} from 'antd';


const TodoUI=(props)=>{
    return (
        <div style={{marginTop:'10px',marginLeft:'10px'}}>
                <div>
    <Input value={props.inputValue} 
    placeholder="Basic usage" 
    style={{width:'300px',marginRight:'10px'}}
    onChange={props.handleInputChange}
    />
    <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
    </div>
    <List
          style={{width:'300px',marginTop:'10px'}}
          bordered
          dataSource={props.list}
          renderItem={(item,index) => (
            <List.Item onClick={()=>{props.handleItemDelete(index)}}>
              {item}
            </List.Item>
          )}
        />
            </div>
    )
}
// class TodoUI extends Component{
//     render(){
//         return (
//             <div style={{marginTop:'10px',marginLeft:'10px'}}>
//                 <div>
//     <Input value={this.props.inputValue} 
//     placeholder="Basic usage" 
//     style={{width:'300px',marginRight:'10px'}}
//     onChange={this.props.handleInputChange}
//     />
//     <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
//     </div>
//     <List
//           style={{width:'300px',marginTop:'10px'}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item,index) => (
//             <List.Item onClick={(index)=>{this.props.handleItemDelete(index)}}>
//               {item}
//             </List.Item>
//           )}
//         />
//             </div>
//         )
//     }
// }

export default TodoUI;