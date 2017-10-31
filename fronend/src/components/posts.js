import React from 'react';
import axios from 'axios';

export default class Posts extends React.Component{

    constructor(props){
      super(props);
    this.state = {
      frmData: {
        name: '',
        text: ''
      }
    }

    this.hdlSubmit = this.hdlSubmit.bind(this);
    this.hdChang = this.hdChang.bind(this);
  }

    hdChang(l){
      var temp = this.state.frmData;
      temp[l.target.name] = l.target.value;
      this.setState = ({
        frmData: temp
      });
    }
    hdlSubmit(e){
      e.preventDefault();
        axios({
        method: 'post',
        url:'http://localhost:3000/posts',
        data: this.state.frmData
      })
      .then( function(response){
        // alert('welcom');
        console.log(response);
        window.location.reload(true);
      }.bind(this))
        .catch( function(err){
          console.log(err);
        });
    }

render(){
  return(
    <form onSubmit={this.hdlSubmit}>
      <div>
        <h1>Hello  Posts Page </h1>
        <input type="submit" value="logout" className="btn btn-danger"/>

        <button className="btn btn-success"> <a href="./profile"  onClick={this.logout} >Profile </a></button>
        <div className="row">
        <textarea name='text' className="col-sm-12" onChange={this.hdChang} ref='text'></textarea>
        <input type="submit" value="send" className="btn btn-secondary btn-lg btn-block"/>
        </div>
      </div>
    </form>
    );
  }
}
