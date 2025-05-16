import Link from "next/link";


export default function Hero(){
    return(
        <div className="min-h-[85vh] flex items-center justify-between lg:gap-0 gap-14 lg:flex-row flex-col-reverse animate-move-up">
        <div className="space-y-10 text-center lg:text-left">
          <h1 className="text-4xl text-[var(--text-primary)] lg:text-7xl font-bold">
            Nice to meet you! 👋
            <br />{" "}
            <span className="underline underline-offset-8 decoration-green-500">
              I&apos;m Noman.
            </span>
          </h1>
          <p className="md:w-96 text-lg text-[var(--text-secondary)]">
          Based in Philadelphia, I&apos;m a Fullstack Developer 
          focused on crafting fast, intuitive web applications that solve real-world problems.

          </p>
            <Link
            href="mailto:Nomanpatel39424@gmail.com"
            className="inline-block group"
            >
            </Link>
        </div>
  
        <div className="flex justify-center md:justify-start pt-24 md:pt-0 pl-15 lg:pl-0">
          <div className="w-72 h-72 space-y-5 -rotate-[25deg] relative ">
            
            <div className="flex gap-4 translate-x-8">
              <div className="w-28 h-28 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[1.5rem] shadow-xl hover:scale-110 hover:rotate-6 transition-all duration-300" />
              <div className="w-28 h-28 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-[20%_80%_50%_50%] shadow-xl hover:scale-110 hover:-rotate-6 transition-all duration-300" />
            </div>

            <div className="flex gap-4 -translate-x-8">
              <div className="w-28 h-28 bg-gradient-to-tr from-pink-500 to-rose-600 rounded-[50%_50%_20%_80%] shadow-xl hover:scale-110 hover:rotate-12 transition-all duration-300" />
              <div className="w-28 h-28 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-[80%_20%_50%_50%] shadow-xl hover:scale-110 hover:-rotate-12 transition-all duration-300" />
            </div>

          </div>
        </div>
      </div>
    )
}