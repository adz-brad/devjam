'use client'

import { Popover } from "@headlessui/react"
import { FaUserCircle } from 'react-icons/fa'
import { TiCodeOutline } from 'react-icons/ti'
import Auth from "../auth/Auth"
import UserMenu from "./UserMenu"

const Portal = () => {

    const isAuth = false

    return(

    <Popover className="ml-auto">
        {({ open, close }) => (
        <>
        <Popover.Button className={`${open && 'text-emerald-500 bg-zinc-950 brightness-125'} rounded-full text-2xl font-brand font-medium outline-0 ${!open && 'hover:text-emerald-500 hover:bg-zinc-950 hover:brightness-125 text-zinc-950 bg-emerald-500 text-zinc-950'} transition-colors`} title="User Portal">
            <FaUserCircle 
                        className="text-4xl scale-110"
                    />
        </Popover.Button>
        <Popover.Panel className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 p-4 bg-zinc-50 rounded-md text-zinc-950 shadow-lg max-w-screen-sm w-full h-[calc(100vh/2)] flex flex-col">
        <div className="flex flex-row items-center border-b-2 border-emerald-500">
    <TiCodeOutline 
      className="text-3xl text-emerald-500" 
    />
    <span className="font-brand font-bold -translate-y-[2px] text-3xl ml-1 mr-2">
        devJam 
    </span>
    <span className="text-lg font-bold translate-y-[2px]">User Portal</span>
    </div>
            {isAuth ?
                <UserMenu />
            :
                <Auth />
            }

        </Popover.Panel>
        </>
        )}
    </Popover>
    )

}

export default Portal