//@ts-nocheck
'use client';

import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaQuestionCircle, FaUserFriends } from 'react-icons/fa';

const LegalAssistancePage = () => {
    const resources = [
        {
            title: 'National Domestic Violence Hotline',
            contact: '1-800-799-SAFE (7233)',
            description: '24/7 confidential support for survivors of domestic violence.',
        },
        {
            title: 'Legal Aid Society',
            contact: '1-800-342-3661',
            description: 'Provides free legal assistance to low-income individuals and families.',
        },
        {
            title: 'RAINN (Rape, Abuse & Incest National Network)',
            contact: '1-800-656-HOPE (4673)',
            description: 'Confidential support for survivors of sexual assault.',
        },
        {
            title: 'National Center for Victims of Crime',
            contact: '1-855-484-2846',
            description: 'Resources and support for victims of crime.',
        },
        {
            title: 'Victim Connect Resource Center',
            contact: '1-855-484-2846',
            description: 'Confidential support for victims of crime, providing information and referrals.',
        },
    ];

    const emergencyContact = {
        title: 'Emergency Contact',
        contact: '100',
        description: 'Call 100 for immediate help in emergencies.',
    };

    const guides = [
        'Stay calm and remember you are not alone.',
        'Document the harassment or abuse: keep a record of incidents, dates, and details.',
        'Reach out to someone you trust: talk to a friend or family member about what’s happening.',
        'Know your rights: familiarize yourself with local laws regarding harassment and abuse.',
        'Seek legal help: contact a legal aid organization or attorney for guidance.',
    ];

    const faqs = [
        {
            question: 'What should I do if I am in immediate danger?',
            answer: 'Call emergency services or go to the nearest safe place.',
        },
        {
            question: 'How can I find a lawyer?',
            answer: 'You can contact the Legal Aid Society or local bar associations for referrals.',
        },
        {
            question: 'Is there any cost for legal assistance?',
            answer: 'Many organizations offer free or low-cost legal services based on income.',
        },
    ];

    const testimonials = [
        {
            name: 'Jessica L.',
            feedback: 'The resources provided helped me find the support I needed during a difficult time. Thank you!',
        },
        {
            name: 'Michael R.',
            feedback: 'I was lost and scared, but the helpline guided me through the process and gave me hope.',
        },
    ];

    return (
        <div className="flex flex-col items-center bg-gray-50 p-8 transition duration-300">
            <motion.h1
                className="text-4xl font-bold mb-8 text-center text-blue-600"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Legal Assistance and Resources
            </motion.h1>

            <motion.p
                className="text-lg mb-6 text-center text-gray-700"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                If you or someone you know is in need of legal support, you can find various resources and guides here to help navigate through difficult situations.
            </motion.p>

            {/* Resources Section */}
            <motion.section
                className="w-full max-w-2xl mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">Resources</h2>
                {resources.map((resource, index) => (
                    <motion.div
                        key={index}
                        className="p-6 border border-gray-300 rounded-lg mb-4 shadow-lg bg-white hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <h3 className="font-bold text-lg text-gray-800">{resource.title}</h3>
                        <p className="text-gray-600">{resource.description}</p>
                        <p className="text-blue-500 flex items-center">
                            <FaPhoneAlt className="mr-1" />
                            {resource.contact}
                        </p>
                    </motion.div>
                ))}
            </motion.section>

            {/* Emergency Contact Section */}
            <motion.div
                className="w-full max-w-2xl mb-12 p-6 border border-red-300 rounded-lg bg-red-100 animate-pulse"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            >
                <h2 className="text-2xl font-semibold mb-4 text-red-600">{emergencyContact.title}</h2>
                <p className="text-gray-700">If you are in immediate danger, call:</p>
                <p className="text-4xl font-bold text-red-600">{emergencyContact.contact}</p>
                <p className="text-gray-600">{emergencyContact.description}</p>
            </motion.div>

            {/* Guides Section */}
            <motion.section
                className="w-full max-w-2xl mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">Guides for Dealing with Harassment or Abuse</h2>
                <ul className="list-disc list-inside text-gray-700">
                    {guides.map((guide, index) => (
                        <motion.li
                            key={index}
                            className="mb-2"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            {guide}
                        </motion.li>
                    ))}
                </ul>
            </motion.section>

            {/* FAQ Section */}
            <motion.section
                className="w-full max-w-2xl mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        className="mb-4 p-4 border border-gray-300 rounded-lg bg-white shadow-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <h3 className="font-bold flex items-center">
                            <FaQuestionCircle className="mr-2 text-blue-500" />
                            {faq.question}
                        </h3>
                        <p className="text-gray-700 mt-1">{faq.answer}</p>
                    </motion.div>
                ))}
            </motion.section>

            {/* Testimonials Section */}
            <motion.section
                className="w-full max-w-2xl mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">Testimonials</h2>
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        className="mb-4 p-4 border border-gray-300 rounded-lg bg-white shadow-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
                        <p className="font-bold text-gray-800 mt-2">- {testimonial.name}</p>
                    </motion.div>
                ))}
            </motion.section>

            {/* Contact Information Footer */}
            <motion.footer
                className="w-full max-w-2xl mb-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">Contact Information</h2>
                <p className="text-gray-700">For further assistance, you can reach out via:</p>
                <p className="text-blue-500 flex items-center justify-center">
                    <FaEnvelope className="mr-1" />
                    support@legalhelp.org
                </p>
            </motion.footer>
        </div>
    );
};



export default LegalAssistancePage;
