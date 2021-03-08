import React from 'react';
import InfoArtist from './InfoArtist';
import InfoTracks from './InfoTracks';
import './App.css';

class QueryBox extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            token: this.props.token,
            value: '',
            Artist: false,
            Track: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    handleSubmit(event) {        
        if(this.state.value === 'Artist'){
            this.setState({
                Artist: true,
                Track: false,   
                isSubmitted: true             
            });
        };
        if(this.state.value === 'Track'){
            this.setState({
                Artist: false,
                Track: true,
                isSubmitted: true
            });
        }
    }


    render() {
        
    
        const labelStyle = {
            textAlign: 'center',
            fontSize: '24px',
            color: '#0080f3'
        };
        const optionsStyle = {
            textAlign: 'center',
            fontSize: '24px',
            color: '#008944',
            margin: '2%'
        }
        const submitStyle = {
            textAlign: 'center',
            fontSize: '24px',
            color: '#ff8944',
            margin: '2%',
            visibility: 'true'
        }        
    return (        
        <div>
            <form onSubmit={this.handleSubmit}>            
                <label style={labelStyle}>
                Escolha o item sobre o qual você quer informações:
                <select style={optionsStyle} value={this.state.value} onChange={this.handleChange}>
                    <option value="Artist">Artista</option>
                    <option value="Track">Música</option>                       
                </select>
                </label>
                <input style={submitStyle} type="submit" value="Submit" />       
            </form>
            <div>
            {this.state.Artist && <InfoArtist token={this.state.token} />}
            </div>
            <div>
            {this.state.Track && <InfoTracks token={this.state.token} />}        
            </div>
        </div>               
    );
  }
}
export default QueryBox;