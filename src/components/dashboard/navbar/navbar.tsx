"use client"
import { Input } from "@/components/ui/input";
import style from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import { usePathname } from "next/navigation";



export default function Navbar(){
    
  const pathName = usePathname();

  return(
    <div className={style.container}>
      <div className={style.title}>{pathName.split("/").pop()}</div>
        <div className={style.menu}>
          <div className={style.search}>
            <MdSearch/>
            <Input  placeholder="Search..."/>
        </div>
      </div>
    </div>
  );
}
