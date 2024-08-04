"use client"
import { forwardRef } from "react"

const ContactForm = forwardRef((props, ref) => {
    return (
        <section ref={ref}>
            <div className="text-center">
                <h3 className="container text-2xl py-2 md:text-3xl text-center mx-auto dark:text-white">Contact Me</h3>
            </div>
            <form className="grid place-items-center">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full md:max-w-3xl py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500 dark:bg-gray-600 dark:border-gray-600"
                    type="text" 
                    placeholder="Name"
                    name="user_name"
                    required 
                />
                <br />
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full md:max-w-3xl py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500 dark:bg-gray-600 dark:border-gray-600"
                    type="text" 
                    placeholder="Email"
                    name="user_email"
                    required 
                />
                <br />
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full md:max-w-3xl py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500 dark:bg-gray-600 dark:border-gray-600"
                    type="text" 
                    placeholder="Subject"
                    name="subject"
                    required 
                />
                <br />
                <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full resize-none md:max-w-3xl py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500 dark:bg-gray-600 dark:border-gray-600" 
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Body">
                </textarea>
                <br />
                <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-gray-100 px-4 py-2 rounded-xl ml-8 transition duration-200 ease-in-out hover:text-gray-800 dark:text-gray-800 dark:hover:text-white" type="submit">Send</button>
            </form>
        </section>
    )
})

export default ContactForm