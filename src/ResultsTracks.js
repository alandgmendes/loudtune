import React from 'react';
import ExportXlsx from './ExportXlsx';

class ResultsTracks extends React.Component{
  constructor(props){
    super(props);
    this.state={
      danceability: this.props.danceability,
      energy: this.props.energy,
      dataKey: this.props.dataKey,
      loudness: this.props.loudness,
      mode: this.props.mode,
      speechiness: this.props.speechiness,
      accousticness: this.props.accousticness,
      instrumentalness: this.props.instrumentalness,
      liveness: this.props.liveness,
      valence: this.props.valence,
      tempo: this.props.tempo,
      name: this.props.name
    }
  }

  render(){ 
    console.log("o nome eh"+ this.props.name);
    const infostyle = {
      fontSize: '20px'
    }
       return(
        <div style={infostyle}>
            <h1 style={infostyle} >nome: {this.props.name} </h1>
            <h1 style={infostyle}>danceability: {this.props.danceability}</h1>
            <h1 style={infostyle}>energy: {this.props.energy}</h1>
            <h1 style={infostyle}>key: {this.props.dataKey}</h1>
            <h1 style={infostyle}>loudness: {this.props.loudness}</h1>
            <h1 style={infostyle}>mode: {this.props.mode}</h1>
            <h1 style={infostyle}>speechiness: {this.props.speechiness}</h1>
            <h1 style={infostyle}>accousticness: {this.props.accousticness}</h1>
            <h1 style={infostyle}>instrumentalness: {this.props.instrumentalness}</h1>
            <h1 style={infostyle}>liveness: {this.props.liveness}</h1>
            <h1 style={infostyle}>valence: {this.props.valence}</h1>
            <h1 style={infostyle}>tempo: {this.props.tempo}</h1>
        <div>
          <ExportXlsx name={this.state.name}
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
                                    tempo={this.state.tempo} />
        </div> 
        </div>
      );
    
    
  }
}
export default ResultsTracks;