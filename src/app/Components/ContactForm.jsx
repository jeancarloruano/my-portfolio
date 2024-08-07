import { forwardRef } from "react"
import Image from 'next/image';
import getConfig from '../../../next.config';

const imageContainerClassName = "relative flex justify-center items-center w-60 h-60 md:w-80 md:h-80 mx-auto mb-4 drop-shadow-lg";
const BASE_PATH = getConfig.basePath;

const inputClassName = "bg-gray-200 appearance-none border-none rounded-lg w-full py-2 px-4 text-gray-800 leading-tight shadow-inner-light dark:shadow-inner-dark focus:outline-none focus:bg-white focus:border-cyan-500 dark:bg-gray-600 dark:border-gray-600 mb-4";
const textareaClassName = "bg-gray-200 appearance-none border-none rounded-lg w-full resize-none py-2 px-4 text-gray-800 leading-tight shadow-inner-light dark:shadow-inner-dark focus:outline-none focus:bg-white focus:border-cyan-500 dark:bg-gray-600 dark:border-gray-600 mb-4";

const ContactForm = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="container mx-auto px-4">
            <div className="text-center">
                <h3 className="text-2xl pt-2 md:text-3xl dark:text-white">Contact Me</h3>
            </div>
            <div className="flex flex-col items-center">
                <div className={imageContainerClassName}>
                    <Image
                        src={BASE_PATH + "/author-contact-memoji.PNG"}
                        alt="Memoji image of the author"
                        fill
                        style={{ objectFit: "contain" }}
                        priority
                    />
                </div>
                <form className="grid place-items-center w-full md:max-w-3xl mx-auto mt-4">
                    <input className={inputClassName}
                        type="text" 
                        placeholder="Name"
                        name="user_name"
                        required 
                    />
                    <input className={inputClassName}
                        type="text" 
                        placeholder="Email"
                        name="user_email"
                        required 
                    />
                    <input className={inputClassName}
                        type="text" 
                        placeholder="Subject"
                        name="subject"
                        required 
                    />
                    <textarea className={textareaClassName}
                        name="message"
                        cols="30"
                        rows="10"
                        placeholder="Body">
                    </textarea>
                    <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-gray-100 px-4 py-2 rounded-xl transition duration-200 ease-in-out hover:text-gray-800 dark:text-gray-800 dark:hover:text-white" type="submit">Send</button>
                </form>
            </div>
        </section>
    )
})

ContactForm.displayName = 'ContactForm'

export default ContactForm
