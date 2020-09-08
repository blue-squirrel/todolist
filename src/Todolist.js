import React, { Fragment ,Component} from 'react'

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:'66',
            list:[]
        }
    }

    render(){
        return (
            <Fragment>
                <div>
                    <input 
                    value={this.state.inputValue}
                    onChange={this.handleInputChange.bind(this)}
                    />
                    <button>提交</button>
                </div>
                <ul>
                    <li>学英语</li>
                    <li>学react</li>
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e){
    this.setState({
        inputValue: e.target.value
    })
    }
}

export default Todolist;