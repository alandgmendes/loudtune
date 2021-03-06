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
      let nameTrack = "";
        event.preventDefault();
        const urlNames = 	"https://api.spotify.com/v1/tracks/" + this.state.value;
        const urlFeatures = "https://api.spotify.com/v1/audio-features/" + this.state.value;
        $.ajax({
          method: "GET",
          dataType: "Json",
          url: urlNames,
          headers: {
            Authorization: `Bearer ${this.props.token}`
            }
        }).then(dados => {
          nameTrack = dados.name;          
        });
        $.ajax({
            method: "GET",
            dataType: "Json",
            url: urlFeatures,
            headers: {
            Authorization: `Bearer ${this.props.token}`
            }
            }).then(dados => {
                this.setState({
                    danceability: dados.danceability,
                    energy: dados.energy,
                    dataKey: dados.key,
                    loudness: dados.loudness,
                    mode: dados.mode,
                    speechiness: dados.speechiness,
                    accousticness: dados.accousticness,
                    instrumentalness: dados.instrumentalness,
                    liveness: dados.liveness,
                    valence: dados.valence,
                    tempo: dados.tempo,
                    name: nameTrack,
                    isSubmitted: true,
                });
            });
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
                <label style={labelStyle} >
                    Código da Música:
                    <input style={labelStyle} type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
            <input style={submitStyle} type="submit" value="Submit" />
        </form>
        {this.state.isSubmitted && <ResultsTracks 
                                    name={this.state.name}
                                    danceability={this.state.danceability}
                                    energy={this.state.energy}
                                    dataKey={this.state.dataKey}
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