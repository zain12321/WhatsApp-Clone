import { DonutLarge, MoreHoriz, SearchOutlined } from "@mui/icons-material"
import { Avatar, IconButton } from "@mui/material"
import ChatIcon from '@mui/icons-material/Chat';
import SidebarChat from "./SidebarChat";
import { useEffect, useState } from "react";

function Sidebar() {
    const [seed , setSeed] = useState(0);

    useEffect (() => { 
   setSeed(Math.floor(Math.random() * 5000))
    } ,[])

    return (
        <div className="flex-[0.35]  flex flex-col">

            <div className="flex  items-center justify-between
            p-4 border-r border-gray-300">
            <Avatar
            className="text-[3px]"
            src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
    
            <div className="flex items-center justify-between min-w-[10vw]"> 
           <IconButton className="md:mr-[1w] lg:mr-[2vw]">
            <DonutLarge className="text-[24px]" />
           </IconButton >
           <IconButton className="md:mr-[1w] lg:mr-[2vw]">
           <ChatIcon className="text-[24px]" />
           </IconButton>
           <IconButton className="md:mr-[1w] lg:mr-[2vw]">
           <MoreHoriz className="text-[24px] rotate-90"/>
           </IconButton>
        
          
         </div>
            </div>

            <div className="flex items-center p-[8px] bg-searchBg">
                <div className="flex items-center bg-white w-full h-[35px] rounded-2xl">
                    <SearchOutlined className="text-gray-500 mx-1"/>
                    <input type="text" placeholder="search or start new chat"
                   className="border-none outline-none  md:ml-[5px] lg:ml-[15px] text-gray-600" />
                    </div>
            </div>
    
    <div className="bg-white flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
          <SidebarChat/>
           <SidebarChat/>
           <SidebarChat/>
           <SidebarChat/>
    
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/> 
    </div>
        </div>
    )
}

export default Sidebar;
