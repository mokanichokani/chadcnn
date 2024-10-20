//@ts-nocheck
'use client';

import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { BiUpvote } from 'react-icons/bi'; // Importing icon for upvotes
import { FaReply, FaBars, FaSun, FaMoon } from 'react-icons/fa'; // Importing icons for reply, sidebar toggle, sun, and moon

const Reply = ({ answer, onVote }) => {
    return (
        <div className="border-l-2 border-gray-300 pl-4 mt-2">
            <p className="text-gray-600 dark:text-gray-400">{answer.text}</p>
            <div className="flex items-center justify-between">
                <button onClick={() => onVote(answer)} className="text-gray-500 hover:text-blue-500 dark:text-gray-400">
                    <BiUpvote /> {answer.votes || 0}
                </button>
            </div>
        </div>
    );
};

const CommunitySupportPage = () => {
    const [questions, setQuestions] = useState([
        {
            text: 'How do I deal with stress during exams?',
            user: 'Alice',
            timestamp: '2024-10-20 10:00 AM',
            answers: [
                {
                    text: 'Take regular breaks and practice mindfulness. It helps a lot!',
                    votes: 0,
                },
                {
                    text: 'Join a study group to share tips and support each other.',
                    votes: 0,
                }
            ],
            votes: 0,
        },
        {
            text: 'What are some good ways to stay motivated?',
            user: 'Bob',
            timestamp: '2024-10-20 11:00 AM',
            answers: [
                {
                    text: 'Set small goals and reward yourself when you achieve them!',
                    votes: 0,
                },
                {
                    text: 'Find a study buddy to keep each other accountable.',
                    votes: 0,
                }
            ],
            votes: 0,
        },
    ]);
    const [newQuestion, setNewQuestion] = useState('');
    const [newAnswer, setNewAnswer] = useState('');
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    const handleAskQuestion = () => {
        if (newQuestion) {
            const updatedQuestions = [
                ...questions,
                { text: newQuestion, user: 'User', timestamp: new Date().toLocaleString(), answers: [], votes: 0 },
            ];
            setQuestions(updatedQuestions);
            setNewQuestion('');
            toast.success('Question added!');
        } else {
            toast.error('Please enter a question!');
        }
    };

    const handleAnswerQuestion = () => {
        if (newAnswer && selectedQuestionIndex !== null) {
            const updatedQuestions = [...questions];
            updatedQuestions[selectedQuestionIndex].answers.push({
                text: newAnswer,
                votes: 0,
            });
            setQuestions(updatedQuestions);
            setNewAnswer('');
            setSelectedQuestionIndex(null);
            toast.success('Answer added!');
        } else {
            toast.error('Please enter an answer and select a question!');
        }
    };

    const handleVote = (item) => {
        const updatedQuestions = [...questions];
        if (item.replies) {
            item.votes += 1; // Upvote for reply
        } else {
            item.votes += 1; // Upvote for question
        }
        setQuestions(updatedQuestions);
        toast.success('Vote recorded!');
    };

    const sortedQuestions = [...questions].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    return (
        <div className={`flex ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
            {/* Left Static Sidebar */}
            <aside className={`w-64 p-4 h-screen sticky top-0 shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Forum Navigation</h2>
                    <button onClick={() => setDarkMode(!darkMode)} className="text-gray-600">
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
                <ul>
                    <li className="mb-2">
                        <button className="w-full text-left hover:text-blue-500">
                            <FaBars className="inline mr-1" /> Home
                        </button>
                    </li>
                    <li className="mb-2">
                        <button className="w-full text-left hover:text-blue-500">
                            <FaBars className="inline mr-1" /> Categories
                        </button>
                    </li>
                    <li className="mb-2">
                        <button className="w-full text-left hover:text-blue-500">
                            <FaBars className="inline mr-1" /> Resources
                        </button>
                    </li>
                    <li className="mb-2">
                        <button className="w-full text-left hover:text-blue-500">
                            <FaBars className="inline mr-1" /> Contact
                        </button>
                    </li>
                </ul>
            </aside>

            <main className={`flex-grow p-6 transition-all duration-300`}>
                <Toaster position="top-right" reverseOrder={false} />

                <h1 className={`text-4xl font-bold text-center ${darkMode ? 'text-white' : 'text-black'}`}>Community Support & Safe Space</h1>

                <div className="flex justify-between items-center mb-8 mt-4">
                    <h2 className={`text-3xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Ask a Question</h2>
                </div>

                <textarea
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder="Share your experiences or ask for advice..."
                    className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                />
                <button
                    onClick={handleAskQuestion}
                    className={`w-full bg-blue-600 text-white hover:bg-blue-700 transition duration-200 mt-2 rounded-lg ${darkMode ? 'bg-blue-700' : 'bg-blue-600'}`}
                >
                    Submit Question
                </button>

                <section className="mt-12">
                    <h2 className={`text-3xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Questions</h2>

                    {sortedQuestions.length === 0 ? (
                        <p className={`${darkMode ? 'text-white' : 'text-black'}`}>No questions asked yet. Be the first!</p>
                    ) : (
                        sortedQuestions.map((question, index) => (
                            <motion.div
                                key={index}
                                className={`p-4 border border-gray-300 rounded-lg mb-4 shadow-md bg-gray-50 transition-transform duration-200 ${darkMode ? 'bg-gray-800 border-gray-700' : ''}`}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-center">
                                    <img src="/avatar-1.png" alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
                                    <div>
                                        <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>{question.user}</h3>
                                        <p className="text-gray-500 text-sm">{question.timestamp}</p>
                                    </div>
                                </div>
                                <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>{question.text}</h4>
                                <div className="flex items-center justify-between">
                                    <button onClick={() => handleVote(question)} className="text-gray-500 hover:text-blue-500 dark:text-gray-400">
                                        <BiUpvote /> {question.votes || 0}
                                    </button>
                                    <button onClick={() => setSelectedQuestionIndex(index)} className="text-gray-500 hover:text-blue-500 dark:text-gray-400">
                                        <FaReply />
                                    </button>
                                </div>
                                {selectedQuestionIndex === index && (
                                    <div className="border-t border-gray-300 pt-2 mt-2">
                                        <textarea
                                            value={newAnswer}
                                            onChange={(e) => setNewAnswer(e.target.value)}
                                            placeholder="Write your answer..."
                                            className="w-full border border-gray-300 rounded-lg p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                                        />
                                        <button
                                            onClick={handleAnswerQuestion}
                                            className={`mt-2 w-full bg-blue-600 text-white hover:bg-blue-700 transition duration-200 ${darkMode ? 'bg-blue-700' : 'bg-blue-600'}`}
                                        >
                                            Submit Answer
                                        </button>
                                    </div>
                                )}
                                {question.answers.map((answer, idx) => (
                                    <Reply key={idx} answer={answer} onVote={handleVote} />
                                ))}
                            </motion.div>
                        ))
                    )}
                </section>
            </main>
        </div>
    );
};

export default CommunitySupportPage;