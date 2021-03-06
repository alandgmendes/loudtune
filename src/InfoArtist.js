import React from 'react';
import $ from 'jquery';
import ResultsArtist from './ResultsArtist';

class InfoArtist extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          token: this.props.token,
          isSubmited: false
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
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
                const genres =dados.genres.toString();
                this.setState({
                    name: dados.name,
                    imgUrl: dados.images[2].url,
                    link: dados.external_urls.spotify,
                    popularidade: dados.popularity,
                    seguidores: dados.followers.total,
                    generos: genres,
                    id: dados.id
                });
            });
            this.setState({isSubmitted: true})
            this.render();
      }  
    render() {
        
      const labelStyle = {
        fontSize: '24px',
        color: '#0080f3'
    };
    
    const submitStyle = {
        fontSize: '24px',
        color: '#ff8944',
        margin: '4%'
    }
      return (
          <div>
            <form onSubmit={this.handleSubmit}>
                <label style={labelStyle}>
                    Artista:
                    <input style={labelStyle} type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
            <input style={submitStyle} type="submit" disabled={this.state.isSubmited} />
        </form>
        {this.state.isSubmitted && <ResultsArtist 
                                    imgUrl={this.state.imgUrl}        
                                    name={this.state.name}
                                    link={this.state.link}
                                    popularidade={this.state.popularidade}
                                    seguidores={this.state.seguidores}
                                    generos={this.state.generos} 

                                    />}
        
        </div>
      );
    }
  }

  export default InfoArtist;