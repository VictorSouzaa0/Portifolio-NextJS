import Link from "next/link";
import Image from "next/image";


export function Header(){
    return(
            <header className="bg-gray-900 px-10 py-5  font-bold">
                <div className="flex items-center justify-between ">
                    <img  src="/logo.svg" alt="Logo" />
                    <nav className="text-sky-50 flex  gap-10">
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