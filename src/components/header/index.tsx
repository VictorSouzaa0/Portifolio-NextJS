import Link from "next/link";
import Image from "next/image";


export function Header(){
    return(
            <header className="bg-gray-900 px-10 py-4 sm:items-center font-bold sm:justify-between  ">
                <div className=" items-center sm:flex  sm:justify-between ">
                    <img  src="/logo.svg" alt="Logo" />
                    <nav className="text-sky-50 sm:flex gap-10 text-center ">
                        <Link href="/">
                            <p className="py-1">Home</p>
                        </Link>

                        <Link href="#">
                            <p className="py-1">About</p>
                        </Link>

                        <Link href="#">
                            <p className="py-1">Projects</p>
                        </Link>

                        <Link href="#">
                            <p className="bg-red-600 px-6 py-1 rounded-sm ">
                                Contact
                            </p>
                        </Link>
                    </nav>
                </div>
            </header>
    )
}