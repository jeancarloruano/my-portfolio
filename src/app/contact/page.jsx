import ContactForm from '../home/ContactForm'

export const metadata = {
  title: 'Contact | My Portfolio',
}

export default function ContactPage() {
  return (
    <main className="pt-14 text-gray-800 dark:text-gray-200">
      <ContactForm />
    </main>
  )
}

