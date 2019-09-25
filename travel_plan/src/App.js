import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import CityPage from './CityPage';
import HomePage from './HomePage';


class App extends Component {

  render() {
    return (
        <div className="App">
          <Router>   
            <Route exact path={'/'} render={(routerProps)=>(
              <HomePage>
              </HomePage>
                 
            )}/>
            <Route exact path={'/seattle'} render={(routerProps)=>(
              <CityPage city={'seattle'} introTitle='Seattle' 
              introImage='https://res.cloudinary.com/dorsia/image/upload/w_1620/optimized/web_assets/illustrations/seattle.png'
              introText="Seattle’s more than phallic landmarks and rainy days. Don your slicker and soak in the scenery: framed by Mount Rainier and the Puget Sound, this rapidly-growing tech hub’s a paradise for outdoorsy types, music lovers, and hopbeasts alike."
              >

              </CityPage>     
              )}/>
            <Route exact path={'/newyork'} render={(routerProps)=>(
              <CityPage city={'newyork'} introImage='https://res.cloudinary.com/dorsia/image/upload/w_1620/optimized/web_assets/illustrations/new-york.png'
              introTitle='New York' introText="Arguably the epicenter of the world (or at least according to New Yorkers), NYC needs no introduction. This bright-lights, ‘round-the-clock city has it all: iconic museums, yellow taxis, stellar shopping, and a culinary spectrum ranging from dollar slices to rarefied tasting menus."
              ></CityPage>     
              )}/>
            <Route exact path={'/sanfrancisco'} render={(routerProps)=>(
              <CityPage city={'sanfrancisco'} introImage='https://res.cloudinary.com/dorsia/image/upload/w_1620/optimized/web_assets/illustrations/san-francisco.png'
              introTitle='San Francisco' introText="These days, you're more likely to overhear chatter about crypto start-ups than of free love, but some things never change about SF (aka The City): The weed is dank, layers are a must (don't forget your Patagonia fleece), and superlative dining abounds."
              ></CityPage>     
            )}/>
            <Route exact path={'/losangeles'} render={(routerProps)=>(
              <CityPage city={'losangeles'} introImage='https://res.cloudinary.com/dorsia/image/upload/w_1620/optimized/web_assets/illustrations/los-angeles.png'
              introTitle='Los Angeles' introText="Perpetually-perfect weather, adaptogenic lattes, endless traffic, and some of the nation's best food can all be found in the city of overnight success stories and broken dreams. Yes, that is Miranda Kerr sweating it out next to you at SoulCycle."
              ></CityPage>     
            )}/>
            <Route exact path={'/miami'} render={(routerProps)=>(
              <CityPage city={'miami'} introImage="https://res.cloudinary.com/dorsia/image/upload/w_1620/optimized/web_assets/illustrations/miami.png"
              introTitle='Miami' introText="There's nothing subtle about Miami: spring breakers and the nip-and-tucked swarm beaches and nightclubs, Ferraris flaunt, and cheery Art Deco buildings charm. A burgeoning art scene, sizzling temperatures, and Cuban culture round out an experience unlike anywhere else."
              ></CityPage>     
            )}/>
          </Router>
        </div>)

  }

}

export default App;