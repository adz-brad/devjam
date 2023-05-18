'use client'

import Link from "next/link"
import Jump from 'react-reveal/Jump'
import Reveal from "react-reveal/Reveal"
import { TiCodeOutline } from 'react-icons/ti'

const Logo = () => {
  return (
    <div className="hover:brightness-125 hover:scale-105 transition-all">
    <Reveal ssrReveal>
        <Jump>
            <Link
                href="/"
                className="flex flex-row items-center hover:text-emerald-200 transition-colors"
            >
                <TiCodeOutline 
                  className="text-4xl" 
                />
                <span
                  className="ml-1 leading-relaxed font-brand font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-t from-emerald-500 to-green-500"
                >
                  devJam
                </span>
            </Link>
        </Jump>
    </Reveal>
    </div>
  )
}

export default Logo