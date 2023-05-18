'use server'

import Logo from './Logo'
import MenuItem from './MenuItem'
import { menuItems } from './menuItems'
import Portal from './Portal'

const Navbar = () => {

  return (

    <nav className="sticky relative flex flex-row items-center px-5 py-3 bg-gradient-to-b from-zinc-950 to-transparent z-50">
      <Logo/>
      <ul className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row space-x-8">
        {menuItems?.map((item, i) => {
          return <MenuItem key={i} item={item} />
        })}
      </ul>
      <Portal />
    </nav>

  )
}

export default Navbar