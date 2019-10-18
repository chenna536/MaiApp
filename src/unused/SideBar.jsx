/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Report from './Report.jsx';

// import ReactPlaceholder from 'react-placeholder';

const items = [
  {
    key: 1,
    content: "Home"
  },
  {
    key: 2,
    content: 'Status',
  },
  {
    key: 3,
    content: 'Dashboard',
  },
  {
    key: 4,
    content: 'Sign out',
  },
];

const Menu = Keyframes.Spring({
  in: async next => {
    await next({
      // opacity: 1,
      'z-index': 0,
      transform: 'translateX(0%)',
    });
  },
  out: async next => {
    await delay(700);
    await next({
      'z-index': -1,
      // opacity: 0,
      transform: 'translateX(-100%)',
    });
  },
});

const MenuItems = Keyframes.Trail({
  in: async next => {
    await delay(600);
    await next({
      // opacity: 1,
      'z-index': 0,
      transform: 'translateX(0px)',
    });
  },
  out: async next => {
    await next({
      'z-index': -1,
      // opacity: 0,
      transform: 'translateX(-100px)',
    });
  },
});

const Dashboard = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleBtnClick = () => {
    setMenuOpen(!menuOpen)
  };

  return (
  <div className="w3-container" style={{ width: '100%' }}>
    <button onClick={handleBtnClick} className="w3-button w3-white w3-xxlarge" type="button" style={{ margin: 0, padding: '8px' }}>&#9776;</button>
    <div className="w3-container">
    <Menu
          config={config.gentle}
          unique
          state={menuOpen ? 'in' : 'out'}
        >
          {props => (
            <nav style={props}>
              <ul>
                <MenuItems
                  keys={item => item.key}
                  items={items}
                  state={menuOpen ? 'in' : 'out'}
                  reverse={!menuOpen}
                >
                  {trailitem => trailprops => (
                    <li style={trailprops}>{trailitem.content}</li>
                  )}
                </MenuItems>
              </ul>
            </nav>
          )}
      </Menu>
      <div className="w3-display-container w3-right">
        <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Avatar" className="w3-circle" style={{ width: '110px' }} />
        <i style={{ paddingRight: '1em', paddingBottom: '1em' }} className="w3-circle fa fa-caret-down w3-display-bottomright" />
      </div>
      <h4 style={{ marginTop: '1em', marginBottom: 0, fontSize: '2em' }} className="w3-text-gray"><b>Hello,</b></h4>
      <h4 style={{ margin: 0, fontSize: '2em' }}><b>Sangeetha</b></h4>
    </div>
    <div className="w3-container w3-margin-top">
      <p className="w3-text-gray" style={{ fontSize: '1.3em' }}> Unlock childnames genius by taking the test below. Each report will give you clear steps for growth and excellence.</p>
    </div>
    <Report data={{ heading: 'Creative Genius',image: 'https://www.w3schools.com/w3css/img_avatar3.png', text: 'View Report' }} />
    <Report data={{ heading: 'Logical Ability Genius', image: 'https://www.w3schools.com/w3css/img_avatar3.png', text: 'Start Now' }} />
    <Report data={{ heading: 'Social Ability Genius', image: 'https://www.w3schools.com/w3css/img_avatar3.png', text: 'Unlock Now' }} />
    
    <div className="w3-container">
      <Link to="/assessments"><p className="w3-center w3-text-gray"><b>Unlock all 7 remaining assessments</b></p></Link>
    </div>
    <div className="w3-container">
      <div className="w3-round-xxlarge w3-center w3-margin-bottom" style={{ backgroundColor: 'lightgray' }}>
        <p className="w3-padding-16" style={{ margin: 0 }}><b>Worth Rs.1393 for only Rs.699</b></p>
      </div>
    </div>
  </div>
);
}

export default Dashboard;
