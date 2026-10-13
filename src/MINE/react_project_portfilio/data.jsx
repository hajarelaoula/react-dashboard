import {
    LayoutDashboard,
    Users,
    Package,
    ChartNoAxesCombined,
    Settings,
    MessageCircle,
    CalendarDays,
    UserRound,
    DollarSign,
    ShoppingCart
} from 'lucide-react';
export  const liste =  [
    { name: "Dashboard", acon: LayoutDashboard },
    { name: "Clients", acon: Users },
    { name: "Products", acon: Package },
    { name: "Analytics", acon: ChartNoAxesCombined },
    { name: "Messages", acon: MessageCircle },
    { name: "Calendar", acon: CalendarDays },
    { name: "Profile", acon: UserRound },
    { name: "Settings", acon: Settings }
];
export const dashb=[
    
  { acon:Users,
     title: "Total clients", 
    value: 6389 
  },
  {  acon:DollarSign,
    title: "Account balance", 
    value: "$46,760.89" 
  },
  { 
     acon:ShoppingCart,
     title: "New sales",
     value: 376
     },
  { acon:MessageCircle,
     title: "Pending contacts", 
    value: 35 },
];
export const clients = [
  {
    name: "Chandler Jacobi",
    role: "Direct Security Executive",
    amount: "$ 989.4",
    status: "primary",
    date: "2/3/2020",
    image: "/project_dashboard/one.webp",
  },
  {
    name: "Monserrat Marquardt",
    role: "Forward Accountability Producer",
    amount: "$ 471.44",
    status: "danger",
    date: "11/29/2019",
    image: "/project_dashboard/man-one.webp",
  },
  {
    name: "Lonie Wyman",
    role: "Legacy Program Director",
    amount: "$ 934.24",
    status: "success",
    date: "4/3/2020",
    image: "/project_dashboard/two.webp",
  },
  {
    name: "Corine Abernathy",
    role: "Chief Factors Planner",
    amount: "$ 351.28",
    status: "warning",
    date: "6/21/2019",
    image: "/project_dashboard/thre.webp",
  },
  {
    name: "Lorenz Botsford",
    role: "Central Accountability Developer",
    amount: "$ 355.3",
    status: "neutral",
    date: "8/28/2019",
    image: "/project_dashboard/foor.webp",
  },
  {
    name: "Everette Botsford",
    role: "Product Group Architect",
    amount: "$ 525.42",
    status: "success",
    date: "1/16/2020",
    image: "/project_dashboard/man-two.webp",
  },
  {
    name: "Marilou Beahan",
    role: "Future Security Planner",
    amount: "$ 414.99",
    status: "success",
    date: "10/28/2019",
    image: "/project_dashboard/five.webp",
  },
];

