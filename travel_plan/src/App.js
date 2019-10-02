import React, { Component } from 'react';
import { Form } from 'antd';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import CityPage from './CityPage';
import HomePage from './HomePage';
import NormalLoginForm from './NormalLoginForm'
import RegistrationForm from './RegistrationForm'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('jwt') === null
      ? <Redirect to='/login' />
      : <Component {...props} />
  )} />
)

class App extends Component {

  wrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
  wrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
  render() {
    let homePage = () => <HomePage />;
    let seattleComponent = () => <CityPage city={'Seattle'} introTitle='Seattle' 
      introImage='https://res.cloudinary.com/dorsia/image/upload/w_1620/optimized/web_assets/illustrations/seattle.png'
      introText="Seattle’s more than phallic landmarks and rainy days. Don your slicker and soak in the scenery: framed by Mount Rainier and the Puget Sound, this rapidly-growing tech hub’s a paradise for outdoorsy types, music lovers, and hopbeasts alike."
    />;

    let newyorkComponent = () => <CityPage city={'New York'} introTitle='New York'
      introImage='https://res.cloudinary.com/dorsia/image/upload/w_1620/optimized/web_assets/illustrations/new-york.png'
      introText="Arguably the epicenter of the world (or at least according to New Yorkers), NYC needs no introduction. This bright-lights, ‘round-the-clock city has it all: iconic museums, yellow taxis, stellar shopping, and a culinary spectrum ranging from dollar slices to rarefied tasting menus."
    />;

    let sanfranciscoComponent = () => <CityPage city={'San Francisco'} introTitle='San Francisco'
      introImage='https://res.cloudinary.com/dorsia/image/upload/w_1620/optimized/web_assets/illustrations/san-francisco.png'
      introText="These days, you're more likely to overhear chatter about crypto start-ups than of free love, but some things never change about SF (aka The City): The weed is dank, layers are a must (don't forget your Patagonia fleece), and superlative dining abounds."
    />

    let losangelesComponent = () => <CityPage city={'Los Angeles'} introTitle='Los Angeles'
       introImage='https://res.cloudinary.com/dorsia/image/upload/w_1620/optimized/web_assets/illustrations/los-angeles.png'
       introText="Perpetually-perfect weather, adaptogenic lattes, endless traffic, and some of the nation's best food can all be found in the city of overnight success stories and broken dreams. Yes, that is Miranda Kerr sweating it out next to you at SoulCycle."
    />
      
    let miamiComponent = () => <CityPage city={'Miami'} introTitle='Miami'
       introImage="https://res.cloudinary.com/dorsia/image/upload/w_1620/optimized/web_assets/illustrations/miami.png"
       introText="There's nothing subtle about Miami: spring breakers and the nip-and-tucked swarm beaches and nightclubs, Ferraris flaunt, and cheery Art Deco buildings charm. A burgeoning art scene, sizzling temperatures, and Cuban culture round out an experience unlike anywhere else."
    />
       
  
    return (
        < div className="App">
          <Router>
            <Route exact path={'/login'} render={(routerProps)=>(
               <div className="center-form">
                 <this.wrappedNormalLoginForm {...routerProps}/>
               </div>
            )}/>
            <Route exact path={"/register"} render={(routerProps)=>(
               <div className="center-form">
                 <this.wrappedRegistrationForm/>
               </div>
            )}/>
            <PrivateRoute exact path={'/'} component={homePage} />
            <PrivateRoute exact path={'/seattle'} component={seattleComponent} />
            <PrivateRoute exact path={'/newyork'} component={newyorkComponent} />
            <PrivateRoute exact path={'/sanfrancisco'} component={sanfranciscoComponent} />
            <PrivateRoute exact path={'/losangeles'} component={losangelesComponent} />
            <PrivateRoute exact path={'/miami'} component={miamiComponent} />
          </Router>
       
        </div>)

  }

}

export default App;