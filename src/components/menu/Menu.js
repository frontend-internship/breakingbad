import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import '../../styles/menu.css'

  import { ReactComponent as HomeSvg } from '../../assets/icons/home.svg'
  import { ReactComponent as CharSvg } from '../../assets/icons/assignment_ind.svg'
  import { ReactComponent as EpisodeSvg } from '../../assets/icons/camera_roll.svg'
  import { ReactComponent as SettingsSvg } from '../../assets/icons/settings.svg'
  import { ReactComponent as AboutSvg } from '../../assets/icons/help.svg'

function Menu() {
const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="nav">
            <div className="ham-switcher" onClick={() => setCollapsed(!collapsed)}><button></button> <button></button> <button></button> </div>
           <Router>

                {collapsed ?  (<ul className="nav-list" style={{width: '250px'}}>
                    <li><Link to="/Home" className="item"> <HomeSvg className="icons" /> Home</Link></li>
                    <li><Link to="/Characters" className="item"> <CharSvg className="icons" /> Characters</Link></li>
                    <li><Link to="/Episodes" className="item"> <EpisodeSvg className="icons" /> Episodes</Link></li>
                    <li><Link to="/Settings" className="item"> <SettingsSvg className="icons" /> Settings</Link></li>
                    <li><Link to="/About" className="item"> <AboutSvg className="icons" /> About</Link></li>
                </ul>) :
                  (<ul className="nav-list" style={{width: '130px' }}>
                  <li><Link to="/Home" className="item"> <HomeSvg className="icons" /> </Link></li>
                  <li><Link to="/Characters" className="item"> <CharSvg className="icons" /> </Link></li>
                  <li><Link to="/Episodes" className="item"> <EpisodeSvg className="icons" /> </Link></li>
                  <li><Link to="/Settings" className="item"> <SettingsSvg className="icons" /> </Link></li>
                  <li><Link to="/About" className="item"> <AboutSvg className="icons" /> </Link></li>
              </ul>)}
              
            
                <Switch>
                    <Route path="/Home">
                        <Home />
                    </Route>
                    <Route path="/Characters">
                        <Characters />
                    </Route>
                    <Route path="/Episodes">
                        <Episodes />
                    </Route>
                    <Route path="/Settings">
                        <Settings />
                    </Route>
                    <Route path="/About">
                        <About />
                    </Route>
                </Switch>
            </Router>


        </div>
    )
}

export default Menu


export const Home = () => <h1>Home</h1>
export const Characters = () => <h1>Characters</h1>
export const Episodes = () => <h1>Episodes</h1>
export const Settings = () => <h1>Settings</h1>
export const About = () => <h1>About</h1>
