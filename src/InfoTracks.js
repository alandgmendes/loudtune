import React from 'react';
import $ from 'jquery';
import ResultsTracks from './ResultsTracks';

class InfoTracks extends React.Component {
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
        console.log('infotracks token:' + this.props.token);
        event.preventDefault();
        const urlToSend = "https://api.spotify.com/v1/audio-features/" + this.state.value;
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
                    danceability: dados.danceability,
                    energy: dados.energy,
                    key: dados.key,
                    loudness: dados.loudness,
                    mode: dados.mode,
                    speechiness: dados.speechiness,
                    accousticness: dados.accousticness,
                    instrumentalness: dados.instrumentalness,
                    liveness: dados.liveness,
                    valence: dados.valence,
                    tempo: dados.tempo
                });
            });
            console.log('sucesso');
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
                <label style={labelStyle} >
                    Track:
                    <input style={labelStyle} type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
            <input style={submitStyle} type="submit" value="Submit" />
        </form>
        {this.state.isSubmitted && <ResultsTracks 
                                    danceability={this.state.danceability}
                                    energy={this.state.energy}
                                    key={this.state.key}
                                    loudness={this.state.loudness} 
                                    mode={this.state.mode}
                                    speechiness={this.state.speechiness}
                                    accousticness={this.state.accousticness}
                                    instrumentalness={this.state.instrumentalness}
                                    liveness={this.state.liveness}
                                    valence={this.state.valence}
                                    tempo={this.state.tempo}
                                    />}
        </div>
      );
    }
  }

  export default InfoTracks