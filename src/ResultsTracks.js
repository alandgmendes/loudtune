import React from 'react';

class ResultsTracks extends React.Component{
  
  render(){ 
   console.log(this.props);
       return(
        <div>
            <h1>danceability: {this.props.danceability}</h1>
            <h1>energy: {this.props.energy}</h1>
            <h1>key: {this.props.key}</h1>
            <h1>loudness: {this.props.loudness}</h1>
            <h1>mode: {this.props.mode}</h1>
            <h1>speechiness: {this.props.speechiness}</h1>
            <h1>accousticness: {this.props.accousticness}</h1>
            <h1>instrumentalness: {this.props.instrumentalness}</h1>
            <h1>liveness: {this.props.liveness}</h1>
            <h1>valence: {this.props.valence}</h1>
            <h1>tempo: {this.props.tempo}</h1>

        </div>
      );
    
    
  }
}
export default ResultsTracks;