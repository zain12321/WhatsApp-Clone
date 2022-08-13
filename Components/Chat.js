import { AttachFile, InsertEmoticon, Mic, MoreVert, Phone, Videocam } from "@mui/icons-material"
import { Avatar, IconButton } from "@mui/material"
import { useEffect, useState } from "react"

function Chat() {
    const [seed , setSeed] = useState(0);
    const [input, setInput] =  useState(" ")

    useEffect(() =>{
     setSeed(Math.floor(Math.random() * 5000))
    } ,[])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(`your message >> ${input}`);

        setInput("")
    };
 
    return (
        <div className=" flex-[0.65] flex  flex-col">

            <div className="p-4 flex items-center border-b border-gray-300">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="flex-1 ml-3">
                    <h3 className="text-[16px] font-bold">Zain Fiaz</h3>
                    <p className="text-[12px] text-gray-600">Last Message</p>
                </div>
                <div>
                    <IconButton className="md:mr-[1w] lg::mr-[2vw]">
                        <Videocam/>

                    </IconButton>
                    <IconButton className="md:mr-[1w] lg::mr-[2vw]">
                    <Phone/>
                        
                    </IconButton>
                    <IconButton  className="md:mr-[1w] lg::mr-[2vw]">
                      <MoreVert/>
                    </IconButton>
                </div>
                </div>
                <div className="bg-chat-wallpaper flex-1 bg-no-repeat bg-cover
                 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 p-7">
                    
                <p className={`
                relative text-[16px] p-2 bg-white w-[fit-content] 
                rounded-lg mb-6
                before:absolute 
                before:bottom-3 before:right-[-5px]
                before:w-[10px]
                 before:h-[10px] before:bg-white
                 before:rotate-45
                 ${true && `ml-auto bg-chatSent before:bg-chatSent`}
                 ` }
                >
                <span className="absolute top-[-18px] left-1 text-[12px] font-bold">
             Zain Fiaz
                    </span >
                  Hello
                    <span className="ml-2 text-[10px] font-bold text-gray-500">
                        3:02 pm
                    </span>

                </p>
                <p className={`
                relative text-[16px] p-2 bg-white w-[fit-content] 
                rounded-lg mb-6
                before:absolute 
                before:bottom-3 before:right-[-5px]
                before:w-[10px]
                 before:h-[10px] before:bg-white
                 before:rotate-45
                 ${false && `ml-auto bg-chatSent before:bg-chatSent`}
                 ` }
                >
                <span className="absolute top-[-18px] left-1 text-[12px] font-bold">
                Zubyr BuTT
                    </span >
                  Yes
                    <span className="ml-2 text-[10px] font-bold text-gray-500">
                        3:08 pm
                    </span>

                </p>
                <p className={`
                relative text-[16px] p-2 bg-white w-[fit-content] 
                rounded-lg mb-6
                before:absolute 
                before:bottom-3 before:right-[-5px]
                before:w-[10px]
                 before:h-[10px] before:bg-white
                 before:rotate-45
                 ${true && `ml-auto bg-chatSent before:bg-chatSent`}
                 ` }
                >
                <span className="absolute top-[-18px] left-1 text-[12px] font-bold">
            Zain Fiaz
                    </span >
                  How Are you
                    <span className="ml-2 text-[10px] font-bold text-gray-500">
                        3:09 pm
                    </span>

                </p>
                <p className={`
                relative text-[16px] p-2 bg-white w-[fit-content] 
                rounded-lg mb-6
                before:absolute 
                before:bottom-3 before:right-[-5px]
                before:w-[10px]
                 before:h-[10px] before:bg-white
                 before:rotate-45
                 ${false && `ml-auto bg-chatSent before:bg-chatSent`}
                 ` }
                >
                <span className="absolute top-[-18px] left-1 text-[12px] font-bold">
                Zubyr BuTT 
                    </span >
                I'm Fine
                    <span className="ml-2 text-[10px] font-bold text-gray-500">
                        3:12 pm
                    </span>

                </p>
                <p className={`
                relative text-[16px] p-2 bg-white w-[fit-content] 
                rounded-lg mb-6
                before:absolute 
                before:bottom-3 before:right-[-5px]
                before:w-[10px]
                 before:h-[10px] before:bg-white
                 before:rotate-45
                 ${true && `ml-auto bg-chatSent before:bg-chatSent`}
                 ` }
                >
                <span className="absolute top-[-18px] left-1 text-[12px] font-bold">
             Zain Fiaz 
                    </span >
               All good
                    <span className="ml-2 text-[10px] font-bold text-gray-500">
                        3:13 pm
                    </span>

                </p>
                <p className={`
                relative text-[16px] p-2 bg-white w-[fit-content] 
                rounded-lg mb-6
                before:absolute 
                before:bottom-3 before:right-[-5px]
                before:w-[10px]
                 before:h-[10px] before:bg-white
                 before:rotate-45
                 ${false && `ml-auto bg-chatSent before:bg-chatSent`}
                 ` }
                >
                <span className="absolute top-[-18px] left-1 text-[12px] font-bold">
                Zubyr BuTT
                    </span >
               Yeah you say
                    <span className="ml-2 text-[10px] font-bold text-gray-500">
                        3:20 pm
                    </span>

                </p>
                <p className={`
                relative text-[16px] p-2 bg-white w-[fit-content] 
                rounded-lg mb-6
                before:absolute 
                before:bottom-3 before:right-[-5px]
                before:w-[10px]
                 before:h-[10px] before:bg-white
                 before:rotate-45
                 ${true && `ml-auto bg-chatSent before:bg-chatSent`}
                 ` }
                >
                <span className="absolute top-[-18px] left-1 text-[12px] font-bold">
          Zain Fiaz
                    </span >
                    Some messages
                    <span className="ml-2 text-[10px] font-bold text-gray-500">
                        3:22 pm
                    </span>

                </p>
                <p className={`
                relative text-[16px] p-2 bg-white w-[fit-content] 
                rounded-lg mb-6
                before:absolute 
                before:bottom-3 before:right-[-5px]
                before:w-[10px]
                 before:h-[10px] before:bg-white
                 before:rotate-45
                 ${false && `ml-auto bg-chatSent before:bg-chatSent`}
                 ` }
                >
                <span className="absolute top-[-18px] left-1 text-[12px] font-bold">
                Zubyr BuTT 
                    </span >
                    Some messages
                    <span className="ml-2 text-[10px] font-bold text-gray-500">
                        3:25 pm
                    </span>

                </p>
                <p className={`
                relative text-[16px] p-2 bg-white w-[fit-content] 
                rounded-lg mb-6
                before:absolute 
                before:bottom-3 before:right-[-5px]
                before:w-[10px]
                 before:h-[10px] before:bg-white
                 before:rotate-45
                 ${true && `ml-auto bg-chatSent before:bg-chatSent`}
                 ` }
                >
                <span className="absolute top-[-18px] left-1 text-[12px] font-bold">
           Zain Fiaz
                    </span >
                    Some messages
                    <span className="ml-2 text-[10px] font-bold text-gray-500">
                        3:28 pm
                    </span>

                </p>
                <p className={`
                relative text-[16px] p-2 bg-white w-[fit-content] 
                rounded-lg mb-6
                before:absolute 
                before:bottom-3 before:right-[-5px]
                before:w-[10px]
                 before:h-[10px] before:bg-white
                 before:rotate-45
                 ${false && `ml-auto bg-chatSent before:bg-chatSent`}
                 ` }
                >
                <span className="absolute top-[-18px] left-1 text-[12px] font-bold">
                Zubyr BuTT 
                    </span >
                    Some messages
                    <span className="ml-2 text-[10px] font-bold text-gray-500">
                        3:30 pm
                    </span>

                </p>
                <p className={`
                relative text-[16px] p-2 bg-white w-[fit-content] 
                rounded-lg mb-6
                before:absolute 
                before:bottom-3 before:right-[-5px]
                before:w-[10px]
                 before:h-[10px] before:bg-white
                 before:rotate-45
                 ${true && `ml-auto bg-chatSent before:bg-chatSent`}
                 ` }
                >
                <span className="absolute top-[-18px] left-1 text-[12px] font-bold">
           Zain Fiaz
                    </span >
                    Some messages
                    <span className="ml-2 text-[10px] font-bold text-gray-500">
                        3:34 pm
                    </span>

                </p>
                </div>
                <div className="flex items-center justify-between h-[62px] border-t border-gray-300 px-2">
                    <IconButton>
                        <InsertEmoticon />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <form action="" className="flex flex-1">
                        <input type="text" placeholder="Send your Messages"
                        className="flex-1 p-2 rounded-[32px] border-none outline-none"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}/>
                        <button className="hidden" onClick={sendMessage}
                        >Send Message</button>
                    </form>
                    <IconButton>
                        <Mic/>
                    </IconButton>
                </div>
            
        </div>
    )
}

export default Chat
