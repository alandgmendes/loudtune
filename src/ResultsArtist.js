import React from 'react';
import ExportXlsx from './ExportXlsx';

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
            <div>
              < ExportXlsx imgUrl={this.props.imgUrl}        
                                    name={this.props.name}
                                    link={this.props.link}
                                    popularidade={this.props.popularidade}
                                    seguidores={this.props.seguidores}
                                    generos={this.props.generos}/>
            </div>
        </div>
      );
    
    
  }
}
  


export default ResultsArtist;
