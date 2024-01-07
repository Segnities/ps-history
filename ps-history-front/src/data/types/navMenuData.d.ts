export interface Subcategory {
   id: string;
   title: string;
   href: string;
   img: string;
}

export interface Special {
   id: string;
   title: string;
   href: string;
}

export interface MenuOption {
   id: string;
   title: string;
   subcategories: Subcategory[];
   specials?: Special[];
}