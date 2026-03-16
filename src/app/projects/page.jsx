import Portfolio from '../home/Portfolio'

export const metadata = {
  title: 'Projects | My Portfolio',
}

export default function ProjectsPage() {
  return (
    <main className="pt-14 text-gray-800 dark:text-gray-200">
      <Portfolio />
    </main>
  )
}

