import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import Home from '../../containers/home/Home'
import Characters from '../../containers/chars/Characters'
import Episodes from '../../containers/eps/Episodes'
import Settings from '../../containers/settings/Settings'
import About from '../../containers/about/About'

import '../../styles/menu.css'

import { ReactComponent as HomeSvg } from '../../assets/icons/home.svg'
import { ReactComponent as CharSvg } from '../../assets/icons/assignment_ind.svg'
import { ReactComponent as EpisodeSvg } from '../../assets/icons/camera_roll.svg'
import { ReactComponent as SettingsSvg } from '../../assets/icons/settings.svg'
import { ReactComponent as AboutSvg } from '../../assets/icons/help.svg'

function Menu() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Router>
            <div className="main">

                <div className="menu-content">
                    <div className="menu" style={{ width: !collapsed ? '100px' : '250px' }}>
                        <div className="ham-switcher" onClick={() => setCollapsed(!collapsed)}><button></button> <button></button> <button></button> </div>
                        {collapsed ? (<ul className="nav-list">
                            <li><Link to="/Home" className="item"> <HomeSvg className="icons" /> Home</Link></li>
                            <li><Link to="/Characters" className="item"> <CharSvg className="icons" /> Characters</Link></li>
                            <li><Link to="/Episodes" className="item"> <EpisodeSvg className="icons" /> Episodes</Link></li>
                            <li><Link to="/Settings" className="item"> <SettingsSvg className="icons" /> Settings</Link></li>
                            <li><Link to="/About" className="item"> <AboutSvg className="icons" /> About</Link></li>
                        </ul>) :
                            (<ul className="nav-list">
                                <li><Link to="/Home" className="item"> <HomeSvg className="icons" /> </Link></li>
                                <li><Link to="/Characters" className="item"> <CharSvg className="icons" /> </Link></li>
                                <li><Link to="/Episodes" className="item"> <EpisodeSvg className="icons" /> </Link></li>
                                <li><Link to="/Settings" className="item"> <SettingsSvg className="icons" /> </Link></li>
                                <li><Link to="/About" className="item"> <AboutSvg className="icons" /> </Link></li>
                            </ul>)}
                    </div>

                    <div className="content">
                        <Switch>
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
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>

    )
}

export default Menu