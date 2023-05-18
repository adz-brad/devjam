import { Menu } from "@headlessui/react"

const UserMenu = () => {
  return (
    <Menu
    as="div"
    title="User Menu"
    className="ml-auto relative"
  >
    {({ open, close }) => (
        <>
            <Menu.Button
                className={`${open && 'text-emerald-600'} text-2xl font-brand font-medium ${!open && 'hover:text-emerald-500'} transition-colors`}
            >
                <FaUserCircle 
                    className="text-4xl"
                />
            </Menu.Button>
            <Menu.Items 
                    as="ul"
                    className="absolute text-zinc-950 left-1/2 -translate-x-1/2 translate-y-4 whitespace-nowrap flex flex-col font-medium transition-color p-3 rounded-md shadow-lg bg-zinc-50"
                >
  
                    <Menu.Item
                        as="li" 
                        title="Sign In"
                        className="hover:bg-zinc-600/20 py-1 px-2 rounded-md"
                      >
                        <Link 
                          href=""
                          onClick={close}
                          className="flex flex-row items-center space-x-4"
                        >
                            <div className="my-auto rounded-full p-2 bg-zinc-900 shadow-md text-emerald-500 self-start">
                                {/*link icon*/}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold">
                                    {/*link.title*/}
                                </span>
                                <span>
                                    {/*link.description*/}
                                </span>
                            </div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        as="li" 
                        title=""
                        className="hover:bg-zinc-600/20 py-1 px-2 rounded-md"
                      >
                        <Link 
                          href=""
                          onClick={close}
                          className="flex flex-row items-center space-x-4"
                        >
                            <div className="my-auto rounded-full p-2 bg-zinc-900 shadow-md text-emerald-500 self-start">
                                {/*link icon*/}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold">
                                    {/*link.title*/}
                                </span>
                                <span>
                                    {/*link.description*/}
                                </span>
                            </div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        as="li" 
                        title=""
                        className="hover:bg-zinc-600/20 py-1 px-2 rounded-md"
                      >
                        <Link 
                          href=""
                          onClick={close}
                          className="flex flex-row items-center space-x-4"
                        >
                            <div className="my-auto rounded-full p-2 bg-zinc-900 shadow-md text-emerald-500 self-start">
                                {/*link icon*/}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold">
                                    {/*link.title*/}
                                </span>
                                <span>
                                    {/*link.description*/}
                                </span>
                            </div>
                        </Link>
                    </Menu.Item>
  
                </Menu.Items>
        </>
    )}
  </Menu>
  )
}

export default UserMenu