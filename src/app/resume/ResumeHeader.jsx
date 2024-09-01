const headerCustom = 'text-center'
const h2Custom = 'font-semibold mb-4'

export default function ResumeHeader() {
    return (
        <header className={headerCustom}>
            <h1 id='author-name'>Jeancarlo Ruano</h1>
            <h2 id='resume-location' className={h2Custom}>Los Angeles, CA</h2>
        </header>
    )
}