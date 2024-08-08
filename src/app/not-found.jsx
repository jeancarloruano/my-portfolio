import Link from 'next/link'
import Image from 'next/image'
import getConfig from '../../next.config'

const mainClass = 'flex flex-col items-center justify-center min-h-screen space-y-4 p-4'
const h3Class = 'text-2xl py-5 md:text-3xl dark:text-white'
const imageContainerClass = 'relative bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full w-80 h-80 overflow-hidden border-gray-600 border-4 shadow-md shadow-gray-400 dark:border-gray-400 dark:shadow-lg dark:shadow-gray-950'
const pClass = 'text-md py-5 text-gray-800 md:text-xl dark:text-gray-200'
const linkClass = 'text-teal-500 font-bold transform transition-transform duration-300 hover:text-white hover:scale-105'
const BASE_PATH = getConfig.basePath

export default function NotFound() {
    return (
        <main className={mainClass}>
            <h3 className={h3Class}>
                404 | Page Not Found
            </h3>
            <p className={pClass}>
                Sorry, but I couldn&apos;t find the page you were looking for.
            </p>
            <div className={imageContainerClass}>
                <Image
                    fill
                    style={{ objectFit: 'cover' }}
                    src={BASE_PATH + '/author-404-memoji.PNG'}
                    alt='404 Memoji image of the author'
                    priority
                />    
            </div>
            <p className={pClass}>
                Let&apos;s take you back <Link href='/' className={linkClass}>home</Link>.
            </p>
        </main>
    )
}
