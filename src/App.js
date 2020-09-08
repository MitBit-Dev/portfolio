import './sass/App.scss';
import logo from './mr-robot.png';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { CSSTransition,SwitchTransition } from 'react-transition-group';
import 'animate.css/animate.css';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';	
import ContactMe from './pages/ContactMe';	

const routes = [		
	{ path: '/portfolio', name: 'Home', Component: Home },
	{ path: '/aboutme', name: 'About', Component: AboutMe },
	{ path: '/skills', name: 'Skills', Component: Skills },
	{ path: '/contact', name: 'Contact', Component: ContactMe },
]

function App() {
	const [hovered, setHovered] = useState(false);
	const [show, setShow] = useState(false);
	const toggleHover = () => setHovered(!hovered);
	const menuToggle = () => setShow(!show);

  	return (
		<>
			<Router>
				<header>
					<div className={show? "menu-btn close":"menu-btn"} onClick={menuToggle}>
						<div className="menu-line"></div>
						<div className="menu-line"></div>
						<div className="menu-line"></div>
					</div>
					<nav className={show? "sidenav show":"sidenav"}>
						
						<div className="imgholder">
							<img src={logo} 
								alt="IMG"
								className={hovered ? 'img animate__animated animate__tada' : 'img'}
								onMouseEnter={toggleHover}
								onMouseLeave={toggleHover}
							/>
						</div>
						<ul>
							{routes.map(route => (
								<li>
									<NavLink
										key={route.path}
										to={route.path}
										activeClassName="active"
										exact
										className="navlink"
									>
										{route.name}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
				</header>
				<Route render={({location}) => (
					<SwitchTransition mode={'out-in'}>
						<CSSTransition
							key={location.key}
							timeout={1500}
							classNames="page"
							unmountOnExit					              
						>
							<Switch location={location} >
								<Route exact path="/portfolio">
									<Home/>
								</Route>
								<Route path="/aboutme">
									<AboutMe/>
								</Route>
								<Route path="/contact">
									<ContactMe/>
								</Route>
								<Route path="/skills">
									<Skills/>
								</Route>
							</Switch>
						</CSSTransition>
					</SwitchTransition>
				)} />
			</Router>
		</>
  	);
}
export default App;
