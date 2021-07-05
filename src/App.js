import React from 'react';
import './index.css';
import{connect} from 'react-redux';
import {addNewTodo,removeTodo,deleteTodo} from './actions';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      text:"",
    }
  }
  handleChange=(e)=>{
    console.log(e.target.value);
    this.setState({
      text:e.target.value
    })
  }

  handleAdd=()=>{
    this.props.dispatch(addNewTodo(this.state.text));
  }
  delete=()=>{
    this.props.dispatch(deleteTodo())
  }

  render() {
    const{list}=this.props;
    return (
      <div className="parents">
        <div className="main">
          <span className="text-white h5">Add To Do ✒</span>
          <div className="main-input ">
              <input value={this.state.text} onChange={this.handleChange} className="form-control" type="text" placeholder="✍ Type Here" />
              <i onClick={this.handleAdd} className="fas fa-plus-circle"></i>
          </div>
          { 
            list.map((data)=>{
              return(
                <div className="list-container" key={data.id}>
                <span className="h5">{data.data}</span>
                <i onClick={()=>this.props.dispatch(removeTodo(data.id))} className="far fa-times-circle ml-1"></i>
                </div>
              )
            })

          }
          <button type="button" class="btn btn-outline-warning mt-5" onClick={this.delete}>Remove all</button>
          <a href="https://github.com/arbaztalk2me/" className="btn btn-outline-danger mt-5">Source Code <i class="fab fa-github"></i></a>
        </div>
       
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    list:state.todo.list,
  }
};
export default connect(mapStateToProps)(App);
