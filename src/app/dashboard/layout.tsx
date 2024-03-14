import Sidebar from "@/components/dashboard/sidebar/sidebar"; 
import Navbar from "@/components/dashboard/navbar/navbar";
import { ReactNode } from "react";
import style from "@/components/dashboard/dashboard.module.css"


type LayaoutProps = {children?: ReactNode};

export default function Layaout({ children}: LayaoutProps){
   return(
    <div className="bg-[#151c2c] h-screen">
   <div className={style.container}>
      <div className={style.menu}>
        <Sidebar/>
      </div>
      <div className={style.content}>
        <Navbar/>
        {children}
      </div>
    </div>
    </div>
   );
}
