//@ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaAppleAlt, FaRunning, FaLeaf, FaHeartbeat } from 'react-icons/fa';
import { toast, Toaster } from 'react-hot-toast';

const IndexPage = () => {
  const fitnessPlans = [
    { name: "Cardio Blast", duration: "30 mins", intensity: "High", exercises: ["Jumping Jacks", "Burpees", "Mountain Climbers"], icon: <FaRunning />, color: 'bg-red-100' },
    { name: "Yoga Flex", duration: "45 mins", intensity: "Low", exercises: ["Sun Salutations", "Warrior Pose", "Downward Dog"], icon: <FaLeaf />, color: 'bg-blue-100' },
    { name: "Strength Training", duration: "60 mins", intensity: "Medium", exercises: ["Bench Press", "Squats", "Deadlift"], icon: <FaDumbbell />, color: 'bg-green-100' },
    { name: "HIIT", duration: "20 mins", intensity: "High", exercises: ["Tuck Jumps", "Plank Jacks", "Sprint"], icon: <FaHeartbeat />, color: 'bg-purple-100' }
  ];

  const nutritionPlans = [
    { name: "Low Carb", meals: ["Scrambled Eggs", "Grilled Chicken Salad", "Steamed Veggies"], icon: <FaAppleAlt />, color: 'bg-yellow-100' },
    { name: "Balanced Diet", meals: ["Oatmeal with Berries", "Quinoa Bowl", "Grilled Fish"], icon: <FaAppleAlt />, color: 'bg-pink-100' },
    { name: "Vegan Delight", meals: ["Smoothie Bowl", "Chickpea Salad", "Tofu Stir Fry"], icon: <FaAppleAlt />, color: 'bg-teal-100' },
    { name: "High Protein", meals: ["Protein Shake", "Tuna Salad", "Chicken Breast"], icon: <FaAppleAlt />, color: 'bg-orange-100' }
  ];

  const [goal, setGoal] = useState('');
  const [trackedGoals, setTrackedGoals] = useState([]);
  const [completedGoals, setCompletedGoals] = useState(0);
  const [enabled, setEnabled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (enabled) {
      toast.success('Notifications Enabled');
    }
  }, [enabled]);

  const handleTrackGoal = () => {
    if (goal) {
      setTrackedGoals([...trackedGoals, { name: goal, completed: false }]);
      setGoal('');
      toast.success(`Goal "${goal}" has been added!`);
    }
  };

  const handleToggleGoal = (index) => {
    const newGoals = [...trackedGoals];
    newGoals[index].completed = !newGoals[index].completed;
    setTrackedGoals(newGoals);

    const completedCount = newGoals.filter(goal => goal.completed).length;
    setCompletedGoals(completedCount);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6 space-y-12">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Fitness Plans Section */}
      <section>
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Fitness Plans
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fitnessPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`${plan.color} p-6 rounded-lg shadow-md space-y-3 transition-transform duration-300 hover:scale-105`}
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
                willChange: 'transform'
              }}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "linear", delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl text-gray-800">{plan.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>
              </div>
              <p className="text-gray-800">Duration: {plan.duration}</p>
              <p className="text-gray-800">Intensity: {plan.intensity}</p>
              <ul className="list-disc pl-5 space-y-1">
                {plan.exercises.map((exercise, i) => <li key={i} className="text-gray-800">{exercise}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Nutrition Plans Section */}
      <section>
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Nutrition Plans
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nutritionPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`${plan.color} p-6 rounded-lg shadow-md space-y-3 transition-transform duration-300 hover:scale-105`}
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
                willChange: 'transform'
              }}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "linear", delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl text-gray-800">{plan.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                {plan.meals.map((meal, i) => <li key={i} className="text-gray-800">{meal}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add Goals Section */}
      <section>
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Add Your Goals
        </h1>
        <div className="space-y-4">
          <input 
            type="text" 
            value={goal} 
            onChange={e => setGoal(e.target.value)}
            className="p-3 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            placeholder="Enter your goal"
          />
          <button onClick={handleTrackGoal} className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold transition-all duration-300">
            Add Goal
          </button>
        </div>
      </section>

      {/* Track Goals Section */}
      <section>
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Tracking Tools
        </h1>
        <div id="tracked-goals" className="mt-6 space-y-3">
          {trackedGoals.map((trackedGoal, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm space-x-3"
            >
              <input
                type="checkbox"
                checked={trackedGoal.completed}
                onChange={() => handleToggleGoal(index)}
                className="w-5 h-5"
              />
              <span className="text-gray-800 text-lg font-semibold">{trackedGoal.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Progress Bar for Goals */}
      <section>
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Your Progress
        </h1>
        <div className="bg-gray-200 rounded-full h-8 relative">
          <div 
            className="bg-blue-500 h-full rounded-full"
            style={{ width: `${(completedGoals / trackedGoals.length) * 100 || 0}%` }}
          />
          <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white">
            {trackedGoals.length > 0 ? `${completedGoals} of ${trackedGoals.length} goals completed` : "No goals tracked"}
          </span>
        </div>
      </section>

      {/* Notification Switch */}
      <section>
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Notifications
        </h1>
        <div className="flex justify-center items-center space-x-4">
          <span className="text-lg">Enable Notifications</span>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-blue-500' : 'bg-gray-200'} relative inline-flex items-center h-6 rounded-full w-11`}
          >
            <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full`} />
          </Switch>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;