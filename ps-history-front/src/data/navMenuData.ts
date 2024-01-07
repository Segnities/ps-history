import { nanoid } from "nanoid";
import { MenuOption } from "./types/navMenuData"

export const menuOptions: MenuOption[] = [
   {
      id: nanoid(),
      title: 'Games',
      subcategories: [
         {id: nanoid(), title: 'PS5', img: '', href: ''},
         {id: nanoid(), title: 'PS4', img: '', href: ''},
         {id: nanoid(), title: 'PS VR2', img: '', href: ''},
         {id: nanoid(), title: 'PC', img: '', href: ''},
         {id: nanoid(), title: 'PS Plus', img: '', href: ''}
      ],
      specials: []
   },
   { id: nanoid(), title: 'PS5', subcategories: [] },
   { id: nanoid(), title: 'PS4', subcategories: [] },
   { id: nanoid(), title: 'Accessories', subcategories: [] },
];