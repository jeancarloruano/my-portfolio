import { forwardRef } from 'react'
import Image from 'next/image'
import getConfig from '../../../next.config'

const contactSectionContainerClass = 'container mx-auto px-4'
const h3ContainerClass = 'text-center'
const h3Class = 'text-xl xs:text-2xl pt-2 md:text-3xl dark:text-white'
const inputClass = 'text-sm xs:text-base bg-gray-200 appearance-none border-none rounded-lg w-full py-2 px-4 text-gray-800 leading-tight xs:leading-tight shadow-inner-light dark:shadow-inner-dark focus:outline-none focus:bg-white focus:border-cyan-500 dark:bg-gray-600 dark:border-gray-600 mb-4'
const textareaClass = 'text-sm xs:text-base bg-gray-200 appearance-none border-none rounded-lg w-full resize-none py-2 px-4 text-gray-800 leading-tight xs:leading-tight shadow-inner-light dark:shadow-inner-dark focus:outline-none focus:bg-white focus:border-cyan-500 dark:bg-gray-600 dark:border-gray-600 mb-4'
const imageContainerClass = 'relative flex justify-center items-center w-48 h-48 xs:w-52 xs:h-52 sm:w-60 sm:h-60 md:w-80 md:h-80 mx-auto mb-4 drop-shadow-lg'
const contactButtonClass = 'text-sm xs:text-base bg-cyan-500 md:hover:bg-cyan-600 active:bg-cyan-600 text-gray-100 px-4 py-2 rounded-xl shadow-inner-light-bezel focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cyan-500 focus:shadow-inner-light border border-none transition duration-200 ease-in-out dark:shadow-inner-dark-bezel dark:active:shadow-inner-dark'
const formContainerClass = 'flex flex-col items-center'
const formClass = 'grid place-items-center w-full md:max-w-3xl mx-auto mt-4'
const BASE_PATH = getConfig.basePath

const ContactForm = forwardRef((props, ref) => {

    const handleSubmit = (e) => {
        // Prevent the browser from reloading on submit
        e.preventDefault()

        // Read the form data
        const form = e.target
        const formData = new FormData(form)

        // Create JSON object from form data
        const formJson = Object.fromEntries(formData.entries())
        console.log('Form submitted', formJson)
        alert('DEMO: Message sent successfully!')

        // Clear form
        e.target.reset()
    }

    return (
        <section ref={ref} id='contact-section' className={contactSectionContainerClass}>
            <div className={h3ContainerClass}>
                <h3 className={h3Class}>Contact Me</h3>
            </div>
            <div id='form-container' className={formContainerClass}>
                <div className={imageContainerClass}>
                    <Image
                        src={BASE_PATH + '/author-contact-memoji.PNG'}
                        alt='Memoji image of the author'
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </div>
                <form className={formClass} method='post' onSubmit={handleSubmit}>
                    <input className={inputClass}
                        type='text'
                        placeholder='Name'
                        name='user_name'
                        maxLength='50'
                        required
                    />
                    <input className={inputClass}
                        type='email'
                        placeholder='Email'
                        name='user_email'
                        required
                    />
                    <input className={inputClass}
                        type='text'
                        placeholder='Subject'
                        name='email_subject'
                        required
                    />
                    <textarea className={textareaClass}
                        name='email_body'
                        cols='30'
                        rows='10'
                        placeholder='Body'
                        required
                    />
                    <p className='text-xs sm:text-sm text-red-600 pb-4'><strong>Note: </strong>This feature is still under development. Currently, submitting the form by clicking "Send" is non-functional and is intended for demonstration purposes only.</p>
                    <button className={contactButtonClass} type='submit'>Send</button>
                </form>
            </div>
        </section>
    )
})

ContactForm.displayName = 'ContactForm'

export default ContactForm
