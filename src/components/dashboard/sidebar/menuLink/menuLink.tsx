"use client"

import style from "./menuLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type MenuLinkProps = {
  item: MenuItem;
}
interface MenuItem  {
  title?: string,
  path: string,
  icon?: ReactNode,
  subItem?: MenuItem[],
}

const MenuLink: React.FC<MenuLinkProps> = ({item}) =>{
  const pathName = usePathname();
  return(
    <Link href={item.path} className={`${style.container} ${pathName === item.path  && style.active}`}>
      {item.icon}
      {item.title} 
    </Link>
  );
}

export default MenuLink;
