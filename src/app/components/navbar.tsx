import Link from "next/link"
export default function Navbar() {
    return (
        <div>
      <nav className='font-space-grotesk h-auto w-screen sm:h-12 md:h-16 lg:h-16 py-2 px-5 flex flex-col sm:flex-row justify-between items-center fixed '>
        <div className="mb-5 sm:mb-0 flex items-center space-x-3">
          <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white'>
            <a href="#!">ArtistryWeb</a>
          </h1>
        </div>
        <div className="w-full sm:w-auto mb-3 sm:mb-0">
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-20">
            <li><Link href="/" className="text-purple-400 hover:text-blue-300">Home</Link></li>
            <li><Link href="/about" className="text-purple-400 hover:text-blue-300">About</Link></li>
            <li><Link href="/services" className="text-purple-400 hover:text-blue-300">Services</Link></li>
            <li><Link href="/contact" className="text-purple-400 hover:text-blue-300">Contact</Link></li>
          </ul>
        </div>
        <div className="w-full sm:w-auto">
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-5">
            <li><Link href="#!" className="hover:text-black text-blue-300 hover:bg-blue-300 rounded-full border-blue-300 border-2 py-1 px-5">Login</Link></li>
            <li><Link href="#!" className="hover:text-black text-blue-300 hover:bg-blue-300 rounded-full border-blue-300 border-2 py-1 px-5">Signup</Link></li>
          </ul>
        </div>
      </nav>
    </div>
    )
}