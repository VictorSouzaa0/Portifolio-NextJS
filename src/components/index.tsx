import Link from "next/link";
import Image from "next/image";


export function Header(){
    return(
            <header className="bg-gray-950 px-5 py-5 flex-col ">
                <div className="flex items-center justify-between ">
                    <img  src="/logo.svg" alt="Logo" />
                    <nav className="text-sky-50 flex  gap-10">
                        <Link href="/">
                            <p>Home</p>
                        </Link>

                        <Link href="#">
                            <p>About</p>
                        </Link>

                        <Link href="#">
                            <p>Projects</p>
                        </Link>

                        <Link href="#">
                            <p>Contact</p>
                        </Link>
                    </nav>
                </div>

            </header>
    )
}