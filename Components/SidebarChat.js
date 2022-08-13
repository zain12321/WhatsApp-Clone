import { Avatar } from "@mui/material"
import { useEffect, useState } from "react";

function SidebarChat() {
    const [seed , setSeed] = useState(0);

    useEffect (() => { 
   setSeed(Math.floor(Math.random() * 5000))
    } ,[])

    return (
        <>
        <div className="flex p-5 cursor-pointer border-b border-searchBg hover:bg-bgApp 
        transition duration-150 ease-in-out">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg `}/>
            <div className="ml-3">
                <h2 className="text-[16px] font-bold">Zubyr BuTT</h2>
                <p className="text-[12px]">Last Meassage</p>
            
            </div>

        </div>
     
           </>
    )
}

export default SidebarChat
