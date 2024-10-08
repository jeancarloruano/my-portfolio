const footerClassName = 'pt-10 mt-10 pb-4 text-xs sm:text-sm dark:text-white'
const linkTextClassName = 'text-blue-600 underline dark:text-blue-400'

export default function NavBar() {
  return (
    <footer id='footer' className={footerClassName}>
        icons designed by <a className={linkTextClassName} target='_blank' href='https://www.flaticon.com/authors/kliwir-art' title='icons by kliwir art'>kliwir art</a> from Flaticon.
    </footer>
  )
}