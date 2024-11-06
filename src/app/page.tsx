import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="font-space-grotesk bg-hero-image bg-opacity-10 bg-center bg-cover text-white h-screen w-screen pt-28 text-center ">
    <h1 className="text-4xl font-semibold">Step Into a World of Stunning Web Design</h1>
    <p className="text-2xl mt-5 mb-10">Your journey to success begins here.</p>
    <p className="text-xl mb-5 text-indigo-200">"Welcome to ArtistryWeb, where creativity meets functionality in web design. Whether you're looking to build a stunning new website or refresh your brand’s online presence, we’re here to turn your vision into a reality. Our designs are not only beautiful but also optimized for user experience and performance."</p>
    <Link href="/services" className="bg-purple-900 px-5 py-3 rounded-full hover:bg-purple-400 hover:text-black mb-5">Discover More</Link>
    <p className="text-xl text-indigo-200 mt-14">"Ready to elevate your online presence? Let's talk!" <Link href="/contact" className="text-blue-400 hover:text-purple-950">Contact us</Link></p>
</div>
  );
}
