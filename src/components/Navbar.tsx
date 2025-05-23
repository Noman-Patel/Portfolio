import Link from "next/link";
import { Socials } from "./Data/Socials";
import { Links } from "./Data/Links";
import { TbSTurnLeft } from "react-icons/tb";


export default function Navbar(){
    return(
        <nav className="pt-10 flex justify-between items-center gap-10 animate-move-down p-5">
            <div className=" text-2xl text-[var(--text-primary)] font-bold px-4 py-1 border-3 border-green-500 rounded-full transition">
                Noman 🧑🏻‍💻
            </div>
            <div className="flex items-center gap-5 relative ">
                <div className="right-1 absolute -top-8 flex items-end gap-1 animate-bounce ">
                    <TbSTurnLeft size="1em" className="text-green-500"/>
                    <p className="font-semibold text-[var(--text-primary)] tracking-tight">Resume</p>
                </div>
                {Socials.map(({link,label,Icon}) =>{
                    return(
                        <Link
                            href={link}
                            key={link}
                            aria-label={label}
                            target="_blank"
                            className="hover:scale-125 transition-transform"
                        >
                            <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
                        </Link>
                    )
                })}
            </div>
            <div className=" hidden md:flex  gap-4 relative items-center text-[var(--text-primary)]">
                {Links.map(({href,label}) => {
                    return(
                        <Link
                            href={href}
                            key={href}
                            className="hover:underline underline-offset-4"
                        >
                            {label}
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}