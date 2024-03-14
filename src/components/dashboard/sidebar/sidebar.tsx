'use client'
import { FaFileContract } from "react-icons/fa6";
import { FaHandHoldingWater } from "react-icons/fa";
import {  BsCashCoin } from "react-icons/bs";
import { FaPeopleLine } from "react-icons/fa6";
import { LuFileSpreadsheet } from "react-icons/lu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Profile from "@/app/dashboard/account/profile/page";
import Link from "next/link";

import style from "./sidebar.module.css"
import {
  MdDashboard,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
} from "react-icons/md"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboars",
        path: "/dashboard",
        icon: <MdDashboard/>,
      },
      {
        title: "Users",
        path: "/dashboard/user",
        icon: <MdPeople/>,
      },
      {
        title: "Constracts",
        path: "/dashboard/contracts",
        icon: <FaFileContract/>,
      },
      {
        title: "Dues",
        path: "/dashboard/dues",
        icon: <BsCashCoin/>
      },
      {
        title: "Partner",
        path: "/dashboard/partner",
        icon: <FaPeopleLine/>,
      },
      {
        title: "SpreadSheet",
        path: "/dashboard/spreadsheets",
        icon: <LuFileSpreadsheet/>
      },{
        title: "Servies",
        path: "/dashboard/service/",
        icon: <FaHandHoldingWater/>,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
       title: "Help",
       path: "/dashboard/help",
       icon: <MdHelpCenter />, 
      },
    ],
  },
];

export default function Sidebar() {

  return(
    <div className={style.container}>
      <div className={style.user}>
       <DropdownMenu> 
          <DropdownMenuTrigger asChild>
        <Button variant="ghost"> 
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
        </DropdownMenuTrigger>
           <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
                <Link href="/dashboard/account/profile">Profile</Link>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/dashboard/account/settings">Settings</Link>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
     <DropdownMenuSeparator/> 
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
      </DropdownMenu>

        <div className={style.userDetail}>
          <span className={style.username}>Jhon Joe</span>
          <span className={style.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={style.list}>
      {menuItems.map((cat) =>(
          <li key={cat.title}>
            <span className={style.cat}>{cat.title}</span>
            {cat.list.map(item=>(
                <MenuLink key={item.title} item={item}/>
            ))}
          </li>
        ))}
    </ul>
    </div>
  );
}
