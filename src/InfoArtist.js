import React from 'react';
import $ from 'jquery';
import ResultsArtist from './ResultsArtist';

class InfoArtist extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          token: this.props.token
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        console.log('infoartist token: '+ this.props.token);
        event.preventDefault();
        const urlToSend = "https://api.spotify.com/v1/artists/" + this.state.value;
        $.ajax({
            method: "GET",
            dataType: "Json",
            url: urlToSend,
            headers: {
            Authorization: `Bearer ${this.props.token}`
            }
            }).then(dados => {
                console.log(dados);
                this.setState({
                    nome: dados.name,
                    popularidade: dados.popularity,
                    seguidores: dados.followers.total,
                    
                });
            });
            this.setState({isSubmitted: true})
      }  
    render() {
        
      const labelStyle = {
        fontSize: '24px',
        color: '#0080f3'
    };
    
    const submitStyle = {
        fontSize: '24px',
        color: '#ff8944',
        margin: '10%'
    }
      return (
          <div>
            <form onSubmit={this.handleSubmit}>
                <label style={labelStyle}>
                    Name:
                    <input style={labelStyle} type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
            <input style={submitStyle} type="submit" value="Submit" />
        </form>
        {this.state.isSubmitted && <ResultsArtist 
                                    nome={this.state.nome}
                                    popularidade={this.state.popularidade}
                                    seguidores={this.state.seguidores} 
                                    />}
        </div>
      );
    }
  }

  export default InfoArtist;