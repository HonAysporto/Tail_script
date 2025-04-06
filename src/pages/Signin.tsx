import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Link } from "react-router-dom"

const Signin = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false}) // Autoplay plugin
  )

  const images = [
    "https://plus.unsplash.com/premium_photo-1683309568772-57011d6c1b7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9kb3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683309568772-57011d6c1b7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9kb3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1598791318878-10e76d178023?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRvZG98ZW58MHx8MHx8fDA%3D"
  ];

  return (
    <>
      <main className="bg-gray-200 min-h-screen">
        <div className="bg-gray-200 p-4 lg:grid lg:grid-cols-2 min-h-screen">
          <div className="pt-3 flex flex-col justify-between h-full">
            {/* Top content */}
            <div>
              <button className="text-xl ml-4 border px-3 rounded-full mb-20">TazerH</button>

              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold">Let's get you signed in </h2>
                <p className="text-xs mt-1">Never share your login information</p>

                <form className="mt-5 w-90" action="">
                 
                  <div className="flex flex-col mb-2">
                    <label className="text-sm ml-4 mb-1">Email</label>
                    <input
                      type="email"
                      className="focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-600 bg-white rounded-full w-full h-10 px-4"
                    />
                  </div>

                  <div className="flex flex-col mb-2">
                    <label className="text-sm ml-4 mb-1">Password</label>
                    <input
                      type="password"
                      className="focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-600 bg-white rounded-full w-full h-10 px-4"
                    />
                  </div>

                  <button className="bg-amber-300 w-full mt-5 py-2 rounded-full hover:bg-amber-400 transition ease-out duration-200 cursor-pointer">
                    Submit
                  </button>
                </form>

                <button className="hover:bg-gray-600 hover:text-white transition ease-out duration-200 cursor-pointer mt-4 text-lg px-9 py-1 border-1 rounded-full mb-5 flex items-center gap-1">
                  <span>
                    <svg
                      className="w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                    </svg>
                  </span>
                  Google
                </button>
              </div>
            </div>

            {/* Bottom always-on-bottom content */}
            <div className="flex justify-between flex-col items-center md:flex-row px-3 mt-10">
              <p>
                Don't have an account?{" "}
                <Link className="underline font-bold" to="/signup">Sign up</Link>
              </p>
              <a className="underline font-bold" href="">Terms and Conditions</a>
            </div>
          </div>

          {/* Carousel on right */}
          <div className="carousel-div lg:block hidden overflow-hidden rounded-2xl w-full h-full">
            <Carousel plugins={[plugin.current]} className="w-full h-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="w-full h-155">
                      <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </main>
    </>
  )
}

export default Signin
