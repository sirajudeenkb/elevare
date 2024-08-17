// pages/index.js
import Image from "next/image";
import "./about-page.css";
import IMG1 from "./IMAGES/IMG1.png";
import IMG2 from "./IMAGES/IMG2.png";
import IMG3 from "./IMAGES/IMG3.png";
import IMG4 from "./IMAGES/IMG4.png";
import web from "./IMAGES/Group.png";
import seo from "./IMAGES/startup 1.png";
import ar from "./IMAGES/cloud-computing 1.png";
import mobile from "./IMAGES/coding 1.png"
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <div className="container mx-auto px-4">
      <section className="first-section  lg:my-16">
      <div className="flex flex-col lg:flex-row justify-center items-center  py-8">
        <div className="w-full lg:w-1/2 flex flex-col justify-center sm:flex-row gap-4 lg:gap-8">
          <div className="flex justify-end flex-col">
            <Image src={IMG1} alt="Team brainstorming" className="img1 w-full h-auto" />
          </div>
          <Image src={IMG2} alt="Person writing" className="img2 w-full h-auto" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 lg:p-5 max-w-2xl">
          <h2 className="text-blue-500  mb-2 text-2xl p-5 px-0">About us</h2>
          <h1 className="text-2xl lg:text-4xl font-semibold mb-4  p-5 px-0">
            Lorem Ipsum is simply dummy text of the printing.
          </h1>
          <p className="text-gray-600 text-lg  p-5 px-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 lg:gap-12 py-4">
        <Image src={IMG3} alt="Team working on laptops" className="w-full sm:w-1/2 lg:w-auto h-auto" />
        <Image src={IMG4} alt="Two people with laptop outdoors" className="w-full sm:w-1/2 lg:w-auto h-auto" />
      </div>
      </section>
      <div className="container">
        <div className="lg:w-10/12 lg:my-16 mx-10">
        <div className="lg:w-3/6">
          <h2 className="text-blue-500 tracking-wide lg:text-4xl font-extrabold mb-4 py-6">Lorem Ipsum is simply dummy text of the printing. </h2>
          </div>  
          <p className="text-gray-600 text-xl">KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web weblications and website builders measuring dozens of completed projects. We build and develop mobile weblications for several top platforms, including Android  & IOS. We build and develop mobile weblications for several top platforms, including Android  & IOS. </p>
        </div>
      </div>

      <div className="container py-10 flex">
       
        <div className="flex justify-center items-center  ">
        <div className="lg:w-1/2">
        <div className="lg:w-3/4">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-4  p-5 px-0">Lorem Ipsum is simply dummy text of the printing. </h3>
          <p className="text-sm text-gray-600 py-4">KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web weblications and website builders measuring dozens of completed projects.</p>
          <Link href="/contact-us" className="px-5 py-3 border-solid border rounded-md border-sky-500">Contact us</Link>
        </div>
        </div>
      <div className="grid grid-cols-2 gap-8 p-10 bg-white rounded-lg shadow-lg">
        
        {/* Web weblication */}
        <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
          <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
          <Image src={web} alt="Web weblication" className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-purple-900">Web weblication</h3>
        </div>

        {/* SEO */}
        <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
          <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
          <Image src={seo} alt="seo" className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-purple-900">SEO</h3>
        </div>

        {/* Mobile weblications */}
        <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
          <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
          <Image src={mobile} alt="mobile weblication" className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-purple-900">Mobile weblications</h3>
        </div>

        {/* AR/VR */}
        <div className="flex items-center space-x-4 p-4 bg-pink-50 rounded-lg">
          <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
          <Image src={ar} alt="AR/VR" className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-purple-900">AR/VR</h3>
        </div>
      </div>
    </div>
      </div>
      </div>
      <div className="relative bg-blue-100 p-10 rounded-lg lg:w-screen lg:h-64 flex justify-center items-center mx-auto shadow-lg">

      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Lorem Ipsum is simply dummy text of the printing.
        </h2>
        <div className="mt-6 flex items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full max-w-xs rounded-full shadow-sm focus:outline-none"
          />
       <Link href="/" className="ml-4 bg-black text-white px-6 py-2 rounded-full">
  SUBSCRIBE
</Link>
        </div>
      </div>
    </div>
    </>
  );
}