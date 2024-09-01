const headerCustom = 'text-center'
const headerDescription = 'header-description mb-4'

export default function ResumeHeader() {
    return (
        <header className={headerCustom}>
            <h1 id='author-name'>Jeancarlo Ruano</h1>
            <h2 id='author-title'>Developer and software tester</h2>
            <p id='resume-location' className={headerDescription}>Los Angeles, CA</p>
        </header>
    )
}