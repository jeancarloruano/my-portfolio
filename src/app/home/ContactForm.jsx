'use client'

import { forwardRef } from 'react'
import Image from 'next/image'
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook, BsTwitterX } from 'react-icons/bs'
import getConfig from '../../../next.config'

const contactSectionContainerClass = 'pt-0 pb-10 sm:pb-12'
const h2ContainerClass = 'flex flex-wrap items-center justify-between gap-3'
const socialContainerClass =
  'flex items-center gap-4 text-2xl text-gray-600 dark:text-gray-400'
const socialIconClass =
  'transition duration-100 ease-in-out hover:text-cyan-500 hover:scale-105 md:active:text-cyan-600'
const inputClass = 'text-sm xs:text-base bg-gray-200 appearance-none border-none rounded-lg w-full py-2 px-4 text-gray-800 leading-tight xs:leading-tight shadow-inner-light dark:shadow-inner-dark focus:outline-none focus:bg-white focus:border-cyan-500 dark:bg-gray-600 dark:border-gray-600 mb-4'
const textareaClass = 'text-sm xs:text-base bg-gray-200 appearance-none border-none rounded-lg w-full resize-none py-2 px-4 text-gray-800 leading-tight xs:leading-tight shadow-inner-light dark:shadow-inner-dark focus:outline-none focus:bg-white focus:border-cyan-500 dark:bg-gray-600 dark:border-gray-600 mb-4'
const imageContainerClass =
  'relative shrink-0 lg:flex-1 flex justify-center items-center w-48 h-48 xs:w-52 xs:h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto lg:mx-0 mb-4 lg:mb-0 drop-shadow-lg'
const contactButtonClass = 'text-sm xs:text-base bg-cyan-500 md:hover:bg-cyan-600 active:bg-cyan-600 text-gray-100 px-4 py-2 rounded-xl shadow-inner-light-bezel focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cyan-500 focus:shadow-inner-light border border-none transition duration-200 ease-in-out dark:shadow-inner-dark-bezel dark:active:shadow-inner-dark'
const formContainerClass =
  'mt-6 flex flex-col lg:flex-row items-center lg:items-center justify-center gap-10 lg:gap-12 rounded-2xl bg-white/80 dark:bg-gray-900/60 border border-gray-200/70 dark:border-gray-800/80 shadow-sm dark:shadow-lg dark:shadow-gray-950 px-4 sm:px-6 md:px-10 py-6 sm:py-8'
const formClass = 'w-full md:max-w-3xl lg:max-w-xl'
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
        alert('DEMO: Message sent successfully!\n\nName: ' + formJson.user_name + '\nEmail: ' + formJson.user_email + '\nSubject: ' + formJson.email_subject)

        // Clear form
        e.target.reset()
    }

    return (
        <section ref={ref} id='contact-section' className={contactSectionContainerClass}>
            <div className={h2ContainerClass}>
                <h2 id="contact-me-title">Contact Me</h2>
                <div className={socialContainerClass}>
                    <a
                        href='https://www.linkedin.com/'
                        target='_blank'
                        rel='noreferrer'
                        aria-label='LinkedIn'
                    >
                        <BsLinkedin className={socialIconClass} />
                    </a>
                    <a
                        href='https://github.com/'
                        target='_blank'
                        rel='noreferrer'
                        aria-label='GitHub'
                    >
                        <BsGithub className={socialIconClass} />
                    </a>
                    <a
                        href='https://www.instagram.com/'
                        target='_blank'
                        rel='noreferrer'
                        aria-label='Instagram'
                    >
                        <BsInstagram className={socialIconClass} />
                    </a>
                    <a
                        href='https://www.facebook.com/'
                        target='_blank'
                        rel='noreferrer'
                        aria-label='Facebook'
                    >
                        <BsFacebook className={socialIconClass} />
                    </a>
                    <a
                        href='https://x.com/'
                        target='_blank'
                        rel='noreferrer'
                        aria-label='X (Twitter)'
                    >
                        <BsTwitterX className={socialIconClass} />
                    </a>
                </div>
            </div>
            <div id='form-container' className={formContainerClass}>
                <div className={imageContainerClass}>
                    <Image
                        src={BASE_PATH + '/author-contact-memoji.PNG'}
                        alt='Memoji image of the author'
                        fill
                        style={{ objectFit: 'contain', objectPosition: 'center' }}
                        priority
                    />
                </div>
                <div className="w-full md:max-w-3xl lg:max-w-xl lg:flex-1 flex justify-center">
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
                    <p className='text-xs sm:text-sm text-red-600 pb-4 text-center'><strong>Note: </strong>This feature is still under development. Currently, submitting the form by clicking &ldquo;Send&ldquo; is non-functional and is intended for demonstration purposes only.</p>
                    <div className="w-full flex justify-center">
                      <button className={contactButtonClass} type='submit'>Send</button>
                    </div>
                </form>
                </div>
            </div>
        </section>
    )
})

ContactForm.displayName = 'ContactForm'

export default ContactForm
