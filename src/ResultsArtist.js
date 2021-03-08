import React from 'react';


class ResultsArtist extends React.Component{
  
  render(){ 
    const infoStyle = {
      fontSize: '25px'
    }
       return(
        <div style={infoStyle}>
            <img alt="ArtistImg" src={this.props.imgUrl} />
            <h1 style={infoStyle}>Nome: {this.props.name}</h1>            
            <h1 style={infoStyle}>Link: <a href={this.props.link}>{this.props.link}</a></h1>
            <h1 style={infoStyle}>Popularidade: {this.props.popularidade}</h1>
            <h1 style={infoStyle}>Seguidores: {this.props.seguidores}</h1>
            <h1 style={infoStyle}>Gêneros: {this.props.generos}</h1>           
        </div>
      );
    
    
  }
}
  


export default ResultsArtist;
