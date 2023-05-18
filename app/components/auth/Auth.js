'use client'

import { Tab } from "@headlessui/react"
import Login from "./Login"
import SignUp from "./SignUp"
import { FaUserCheck, FaUserPlus } from 'react-icons/fa'

const Auth = () => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    
    <Tab.Group className="flex flex-col w-full grow" as="div">
      <Tab.List className="grid grid-cols-2 gap-2 mt-4 mb-2" as="div">
        <Tab 
          as="button"
          className={({ selected }) => 
            classNames(
              'flex flex-row items-center space-x-4 p-2 rounded-full hover:bg-zinc-600/20',
              selected
                ? 'bg-zinc-600/20 shadow-md'
                : 'hover:shadow-md'  
            )
          }
        >
                     <div className="my-auto rounded-full p-2 bg-zinc-900 shadow-md text-emerald-500 self-start">
          <FaUserCheck className="text-2xl" />
          </div>
          <span className="font-bold text-xl">
            Existing User
          </span>
        </Tab>
        <Tab 
          as="button"
          className={({ selected }) => 
          classNames(
            'flex flex-row items-center space-x-4 p-2 rounded-full hover:bg-zinc-600/20',
            selected
              ? 'bg-zinc-600/20 shadow-md'
              : 'hover:shadow-md'  
          )
          }
        >
           <div className="my-auto rounded-full p-2 bg-zinc-900 shadow-md text-emerald-500 self-start">
              <FaUserPlus className="text-2xl" />
            </div>
          <span className="font-bold text-xl">
            New User
          </span>
        </Tab>
      </Tab.List>
      <Tab.Panels className="flex flex-col grow">
          <Tab.Panel className="flex flex-col grow">
              <Login />
          </Tab.Panel>
          <Tab.Panel className="flex flex-col grow">
              <SignUp />
          </Tab.Panel>
        </Tab.Panels>
    </Tab.Group>

  )
}

export default Auth