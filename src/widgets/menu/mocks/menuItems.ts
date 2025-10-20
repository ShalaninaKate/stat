

interface MenuItem {
  label: string;
  to?: string;
  subMenu?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    label: "Products",
    subMenu: [
      { label: "link 1", to: "/link" },
      { label: "link 2", to: "/link" },
      { label: "link 3", to: "/link" },
    ],
  },
    {
    label: "Features",
    subMenu: [
      { label: "link 1", to: "/link" },
      { label: "link 2", to: "/link" },
      { label: "link 3", to: "/link" },
    ],
  },
  { label: "Resources", to: "/resources" },

  { label: "Pricing", to: "/contact" },
];
