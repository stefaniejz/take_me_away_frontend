import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import TextCard from './TextCard';

class TextCardList extends Component {
    state={
        cities:{
                 1:{id:1, name:"Seattle", image:"https://res.cloudinary.com/dorsia/image/upload/w_900/optimized/web_assets/illustrations/seattle", description:"The lush green land of Sub Pop, tech giants, Mt.Ranier, and the infamous Seattle Freeze. Yes, it rains here."},
                 2:{id:2, name:"New York", image:"https://res.cloudinary.com/dorsia/image/upload/w_900/optimized/web_assets/illustrations/new-york", description:"Bring your best RBF for those crowded subway rides. Selfie sticks and slow walking are not welcome here."},
                 3:{id:3, name:"San Francisco", image:"https://res.cloudinary.com/dorsia/image/upload/w_900/optimized/web_assets/illustrations/san-francisco", description:'Startups, Karl the Fog, and hills so steep you will get a workout walking around the corner.'},
                 4:{id:4, name:"Los Angeles", image:"https://res.cloudinary.com/dorsia/image/upload/w_900/optimized/web_assets/illustrations/los-angeles", description:"Pack your finest athleisure, you'll need those posi vibes while navigating from Eastside to West."} ,
                 5:{id:5, name:"Miami", image:"https://res.cloudinary.com/dorsia/image/upload/w_1620/optimized/web_assets/illustrations/miami.png",description:"Bienvenidos a Miami, the playground of spring breakers, art collectors, club rats, and celebrities alike."}
               }
    }
    render() {
        return (
            <div>
                  <div className="card-title">
                    <h1>{this.props.title}</h1>
                  </div>
                  <div className="card-list"> 
                    {Object.values(this.state.cities).map(city=>{
                        return   <TextCard city={city.name} key={city.id} image={city.image} description={city.description}/>
                      })
                    }
                  </div>
            </div>
        );
    }
}

export default withRouter(TextCardList);

