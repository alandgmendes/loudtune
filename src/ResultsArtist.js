import React from 'react';

class ResultsArtist extends React.Component{
  
  render(){ 
   console.log(this.props);
       return(
        <div>
            <h1>Nome: {this.props.nome}</h1>
            <h1>Popularidade: {this.props.popularidade}</h1>
            <h1>Seguidores: {this.props.seguidores}</h1>
        </div>
      );
    
    
  }
}
  


export default ResultsArtist;
