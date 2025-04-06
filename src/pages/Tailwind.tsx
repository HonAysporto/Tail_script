import { useState } from "react"

const Tailwind = () => {

   const [open, setopen] = useState(false)

    const burger = () => {
        
            setopen(!open)
        
        
    }
  return (
    // Content Wrapper
        <div className="grid md:grid-cols-3"> 
            <div className="md:col-span-1 md:flex md:justify-end">
                <nav className="text-right">
                    <div className="flex justify-between items-center">
                        <h1  className="font-bold uppercase p-4 border-b border-gray-100">
                            <a className="hover:text-gray-700" href="/">Food Ninja</a>
                        </h1>

                        <div onClick={burger} className="px-4 cursor-pointer md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
       </div>
                    </div> 
                    <ul
            className={`text-sm mt-6 transition-all duration-500 ease-in-out overflow-hidden ${
              open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            } md:hidden`}
          >
                        <li className="text-gray-600 font-bold py-1">
                            <a className="px-4 flex justify-end border-r-4 border-red-400" href="#"> <span>Home</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-5 ml-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</a>
                        </li>
                        <li className="py-1">
                            <a className="px-4 flex justify-end border-r-4 border-white" href="#"> <span>About</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-5 ml-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>
</a>
                        </li>
                        <li className="py-1">
                            <a className="px-4 flex justify-end border-r-4 border-white" href="#"> <span>Contact</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-5 ml-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
</a>
                        </li>
                    </ul>

{/* Navigation for large screens */}
                    <ul className="text-sm mt-6 hidden md:block" id="menu">
                        <li className="text-gray-600 font-bold py-1">
                            <a className="px-4 flex justify-end border-r-4 border-red-400" href="#"> <span>Home</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-5 ml-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</a>
                        </li>
                        <li className="py-1">
                            <a className="px-4 flex justify-end border-r-4 border-white" href="#"> <span>About</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-5 ml-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>
</a>
                        </li>
                        <li className="py-1">
                            <a className="px-4 flex justify-end border-r-4 border-white" href="#"> <span>Contact</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-5 ml-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
</a>
                        </li>
                    </ul>
                    
                </nav>
            </div>


            <main className="px-16 py-6 bg-gray-100 md:col-span-2">
                <div className="flex justify-center md:justify-end">
                    <a className="text-red-400 btn border-red-400 md:border-2 hover:text-white hover:bg-red-400 transition ease-out duration-500" href="#">Log in</a>
                    <a className="text-red-400 ml-2 btn border-red-400 md:border-2 hover:text-white hover:bg-red-400 transition ease-out duration-500" href="#">Sign up</a>
                </div>

                <header>
                    <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
                    <h3 className="text-2xl font-semibold">For Ninjas</h3>
                </header>

                <div>
                    <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Lastest Recipes</h4>

                    <div className="mt-8 grid lg:grid-cols-3 gap-10">
                        {/* Carts goes here */}
                        <div className="card hover:shadow-lg cursor-pointer">
                            <img className="w-full h-32 sm:h-48 object-cover" src="/images/food23.jpg" alt="" />
                            <div className="m-4">
                                <span className="font-bold">5 Bean chili Stew</span>
                                <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                            </div>
                            <div className="badge">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-5 inline-block mr-0.5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
 <span>25 mins</span>
                            </div>
                        </div>

                        <div className="card hover:shadow-lg cursor-pointer">
                            <img className="w-full h-32 sm:h-48 object-cover" src="/images/food23.jpg" alt="" />
                            <div className="m-4">
                                <span className="font-bold">5 Bean chili Stew</span>
                                <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                            </div>
                            <div className="badge">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-5 inline-block mr-0.5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
                                <span>25 mins</span>
                            </div>
                        </div>

                        <div className="card hover:shadow-lg cursor-pointer">
                            <img className="w-full h-32 sm:h-48 object-cover" src="/images/food23.jpg" alt="" />
                            <div className="m-4">
                                <span className="font-bold">5 Bean chili Stew</span>
                                <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                            </div>
                            <div className="badge">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-5 inline-block mr-0.5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
                                <span>25 mins</span>
                            </div>
                        </div>
                    </div>

                    <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>
                       
                    <div className="mt-8">
                         {/* Carts goes here */}
                    </div>

                    <div className="flex justify-center">
                        <div className=' bg-gray-100  border-red-400 border-2  text-red-400 px-2 btn hover:text-white hover:bg-red-400 transition ease-out duration-500'>Load more</div> 
                    </div>
                </div>

            </main>
        </div>
  )
}

export default Tailwind