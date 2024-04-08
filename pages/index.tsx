import Image from "next/image";
import { Inter } from "next/font/google";
import ProfileComponent from "@/components/ProfileComponent";
import QRComponent from "@/components/QRComponent";
import ProductComponent from "@/components/ProductComponent";
import ProductsComponent from "@/components/ProductsComponent";
import Navbar from "@/components/NavbarComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-[100vh] relative ovf">
      <Navbar></Navbar>
      <div className="md:grid md:grid-cols-3 gap-5 m-[2em] text-black text-[0.5em] ">
        
        <div className="col-span-1 md:grid md:grid-rows-2 gap-6">
          <div className="">
            <ProfileComponent></ProfileComponent>
          </div>
          <div className="mt-5 md:mt-0 flex items-center">
            <QRComponent></QRComponent>
          </div>
        </div>
        <div className="bg-white col-span-2 p-5 rounded-[2em] mt-2 md:mt-0">
          <ProductsComponent></ProductsComponent>
        </div>
      </div>
    </div>
  );
}
