import React from 'react';
import './App.css';
import QueryBox from './QueryBox';


class App extends React.Component{
  constructor(props){
    super(props);
    const parameters = this.getHashParams();
    console.log(parameters);
    const token = parameters.access_token;
    this.state = {
      token : ""
    }
    if (token){
      this.state = {
        data: null,
        token : token
      }      
    } 
    
  }
  getHashParams(){
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
    e = r.exec(q);
    while(e){
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    console.log(hashParams);
    return hashParams;
  }
    
  handleCallback = (infoData) =>{
      this.setState({data: infoData});      
  }

  render(){ 
    const mystyle ={
      backgroundColor: '#4CAF50',
      border: 'none',
      color: 'white',
      padding: '15px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      fontSize: '16px'
    }
     if(this.state.token === ""){
       
       return(
        <div className = "App">
          <button className="Loginbutton" style={mystyle} ><a href = "http://localhost:8888" >Log into Spotify:</a></button>
          <h1>Você ainda não autorizou o aplicativo a entrar no spotify!</h1>
          
        </div>
      );
     }
     if(this.state.token !== ""){      
       return(
        <div className = "App">
          
          <QueryBox token={this.state.token} />
        </div>
      )
     }
    
  }
}
  


export default App;
