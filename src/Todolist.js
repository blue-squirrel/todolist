import React, { Fragment ,Component} from 'react'
import './style.css'
import Todoitem from './Todoitem';


class Todolist extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:'66',
            list:['学习英文','学习React']
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this)
    }


    componentWillMount(){
        console.log('compone')
    }
    render(){
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input 
                    id="insertArea"
                    className='input'
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }

    getTodoItem(){
        return (
            this.state.list.map((item,index)=>{
                return (
                    <div>
                    <Todoitem 
                    key={index}
                    content={item}
                     index={index}
                    deleteItem={this.handleItemDelete}
                    />
                    </div>
                )
            })
        )
    }

    handleInputChange(e){
        const value=e.target.value;
    this.setState(()=>({
        inputValue: value
    }))
    }

    handleBtnClick(){
        this.setState((preState)=>({
            list:[...preState.list,preState.inputValue],
            inputValue:''
        }))

    }
    handleItemDelete(index){
        this.setState((preState)=>{
            const list=[...preState.list];
            list.splice(index,1);
            return {list}
        })
    }
}

export default Todolist;