import Link from "next/link";
import Image from 'next/image';

const h3ClassName = "text-2xl py-2 md:text-3xl dark:text-white";
const imageContainerClassName = "relative mx-auto bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full w-60 h-60 overflow-hidden border-gray-600 border-4 shadow-md shadow-gray-400 dark:border-gray-400 dark:shadow-lg dark:shadow-gray-950";
const pClassName = "text-md py-4 text-gray-800 md:text-xl dark:text-gray-200";

export default function NotFound() {
    return (
        <main className="grid place-items-center h-screen">
            <h3 className={h3ClassName}>
                404 | Page Not Found
            </h3>
            <p className={pClassName}>
                We couldn&apos;t find the page you were looking for.
            </p>
            <div className={imageContainerClassName}>
                <Image className="mt-1" fill
                    style={{objectFit:"cover"}}
                    src="/author-404.png"
                    alt="404 Memoji image of the author"
                    priority
                />    
            </div>
            <p className={pClassName}>
                Let&apos;s take you back <Link href="/" className="text-teal-500 font-bold transform transition-transform duration-300 hover:text-white hover:scale-105">home</Link>.
            </p>
        </main>
    )
}
