import { useState } from 'react';
import { menuOptions } from '../../data/navMenuData';

import PsLogo from './assets/img/ps-logo.svg';

import type { MenuOption } from '../../data/types/navMenuData';

import './assets/scss/nav.scss';

export default function Nav() {
   const [option, setOption] = useState<MenuOption | undefined>();
   return (
      <div className='nav__container'>
         <nav className='navbar'>
            <img src={PsLogo} alt="ps-logo" className='ps-logo' />
            {menuOptions.map(it => (
               <div className='nav__item' key={it.id} tabIndex={1}>
                  <h3>{it.title}</h3>
               </div>
            ))}
         </nav>
         <div></div>
      </div>
   );
}