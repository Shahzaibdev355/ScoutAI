import type { ReactElement } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

type ContactInfo = {
    title: string
    icon: ReactElement
    description: string
}[]

const ContactUs = ({ contactInfo }: { contactInfo: ContactInfo }) => {
    return (
        <section className='bg-muted py-4 sm:py-16 lg:py-18'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Header */}
                <div className='relative mx-auto mb-4 w-fit sm:mb-12 lg:mb-18'>
                    <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Contact Us</h2>
                    <span className='bg-primary absolute top-9 left-0 h-px w-full'></span>
                </div>

                <div className='grid items-center gap-12 lg:grid-cols-2'>
                    <img
                        src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/contact-us/image-1.png'
                        alt='Contact illustration'
                        className='size-full rounded-md object-cover max-lg:max-h-70'
                    />

                    <div>
                        <h3 className='mb-6 text-2xl font-semibold'>
                            Happy to help you!
                        </h3>

                        <p className='text-muted-foreground mb-10 text-lg font-medium leading-8'>
                            ScoutAI helps developers generate and run AI-powered automated test cases for their applications with ease.
                            Whether you have a question, found a bug, or need help using the platform, feel free to reach out anytime.
                            <br />
                            <br />
                            Contact Me at{" "}
                            <a
                                href="mailto:shahzaibsheikh355@gmail.com"
                                className="text-blue-600 hover:underline"
                            >
                                shahzaibsheikh355@gmail.com
                            </a>{" "}
                            and we’ll be happy to assist you.
                        </p>
                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs
