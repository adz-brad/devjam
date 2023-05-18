'use client'

import { Menu } from "@headlessui/react"
import Link from "next/link"

const MenuItem = ({ item }) => {

  if(item.links){
    return (
        <Menu
            as="li"
            title={`${item.title} Menu`}
        >
            {({ open, close }) => (
                <>
                    <Menu.Button
                        className={`${open && 'text-emerald-600'} text-2xl font-brand font-medium ${!open && 'hover:text-emerald-500'} transition-colors`}
                        title={`${item.title} Menu`}
                    >
                        {item.title}
                    </Menu.Button>
                    <Menu.Items 
                        as="ul"
                        className="absolute text-zinc-950 left-1/2 -translate-x-1/2 translate-y-4 whitespace-nowrap flex flex-col font-medium transition-color p-3 rounded-md shadow-lg bg-zinc-50"
                    >
                        {item.links.map((link, i) => {
                            return (
                                <Menu.Item
                                    key={i}
                                    as="li" 
                                    title={link.title}
                                    className="hover:bg-zinc-600/20 rounded-md"
                                  >
                                    <Link 
                                      href={link.path} 
                                      onClick={close}
                                      className="flex flex-row items-center space-x-4 p-2"
                                    >
                                        <div className="my-auto rounded-full p-2 bg-zinc-900 shadow-md text-emerald-500 self-start">
                                            {link.icon}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xl font-bold">
                                                {link.title}
                                            </span>
                                            <span className="text-zinc-800">
                                                {link.description}
                                            </span>
                                        </div>
                                    </Link>
                                </Menu.Item>
                            )
                        })}
                    </Menu.Items>
                </>
            )}
        </Menu>
      )
  }  
  else {
    return (
        <li title={item.title}>
            <Link
                className="text-2xl font-brand font-medium hover:text-emerald-500 transition-color" 
                href={item.path}
                title={item.title}
            >
                    {item.title}
            </Link> 
        </li>
    )
  }

}

export default MenuItem
