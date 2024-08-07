import Image from "next/image";
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import profile from '../../public/amrinder-bitmoji.png';
import project1 from '../../public/workflowvault.png';
import project2 from '../../public/quizapp.png';
import project3 from '../../public/photolabs.png';
import project4 from '../../public/netflix-clone.png';

export default function Home() {
  return (
    <main className="px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-3xl">Amrinder Singh</h1>
          <ul className="flex items-center">
            <li><a href="/AmrinderResume.pdf" className="ml-8 rounded-md px-4 py-2 text-white bg-emerald-400 text-xl hover:bg-gray-600" target="_blank">Resume</a></li>
          </ul>
        </nav>

        <div className="text-center p-10 py-10">
          <div className="flex justify-center">
            <Image src={profile} alt="amrinder-bitmoji" className="h-20 w-20 border-solid border-2 border-emerald-400 rounded-full" unoptimized/>
          </div>
          <h2 className="text-6xl py-2 text-emerald-400">Amrinder Singh</h2>
          <h3 className="text-3xl py-2">Full-stack Developer.</h3>
          <p className="text-xl py-5 leading-8 text-gray-600">Transforming ideas into beautiful and functional websites. I specialize in creating responsive, user-friendly web experiences with a focus on clean design and efficient code.</p>
        </div>
        <div className="flex justify-center py-3 mt-8">
          <a href="#projects" className="hover:bg-gray-600 rounded text-2xl p-4 bg-emerald-400 text-white">View My Projects</a>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-emerald-400 mt-8">
          <a href="https://www.linkedin.com/in/amrinder-singh-25239710a/" className="hover:text-gray-600"><AiFillLinkedin/></a>
          <a href="https://github.com/amrinder95" className="hover:text-gray-600"><AiFillGithub/></a>
        </div>
      </section>

      <section id="projects" className="min-h-screen">
        <div className="flex justify-center">
          <h3 className="text-6xl py-4 text-emerald-400">My Projects</h3>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <div className="max-w-screen-sm rounded overflow-hidden shadow-lg my-4 flex flex-col h-full">
            <Image className="w-full" src={project1} alt="workflowvault" unoptimized/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                WorkFlowVault
              </div>
              <p className="text-gray-700 text-base">
                WorkflowVault is a comprehensive project management and employee tracking platform designed to streamline operations, enhance collaboration, and boost productivity.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center mt-auto">
              <a href="https://github.com/amrinder95/workflowvault" className="rounded-md px-4 py-2 text-white bg-emerald-400 text-xl mr-2">Github</a>
              <a href="https://workflowvault.netlify.app" className="rounded-md px-4 py-2 text-white bg-emerald-400 text-xl mr-2">Live</a>
            </div>
          </div>
          <div className="max-w-screen-sm rounded overflow-hidden shadow-lg my-4 flex flex-col h-full">
            <Image className="w-full" src={project2} alt="quizapp" unoptimized/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                QuizApp
              </div>
              <p className="text-gray-700 text-base">
                QuizApp is a unique tool for anyone who might want to share, retrieve and score quizzes. Users can create and share quizzes or view publicly listed quizzes. Quizzes can also be attempted and scores can be viewed and shared.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center mt-auto">
              <a href="https://github.com/amrinder95/workflowvault" className="rounded-md px-4 py-2 text-white bg-emerald-400 text-xl mr-2">Github</a>
              <a href="#" className="rounded-md px-4 py-2 text-white bg-emerald-400 text-xl mr-2">Live</a>
            </div>
          </div>
          <div className="max-w-screen-sm rounded overflow-hidden shadow-lg my-4 flex flex-col h-full">
            <Image className="w-full" src={project3} alt="photolabs" unoptimized/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                PhotoLabs
              </div>
              <p className="text-gray-700 text-base">
              A react-based interactive photo library. Users can view and like photos, filter by topics, and be notified if there are any liked pictures.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center mt-auto">
              <a href="https://github.com/amrinder95/PhotoLabs" className="rounded-md px-4 py-2 text-white bg-emerald-400 text-xl mr-2">Github</a>
              <a href="#" className="rounded-md px-4 py-2 text-white bg-emerald-400 text-xl mr-2">Live</a>
            </div>
          </div>
          <div className="max-w-screen-sm rounded overflow-hidden shadow-lg my-4 flex flex-col h-full">
            <Image className="w-full" src={project4} alt="netflix-clone" unoptimized/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Netflix
              </div>
              <p className="text-gray-700 text-base">
              A clone of the popular streaming service Netflix, built using React, Firebase, Stripe, and Redux. Users can sign up, log in, manage subscriptions and checkout using Stripe.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center mt-auto">
              <a href="https://github.com/amrinder95/netflix-clone" className="rounded-md px-4 py-2 text-white bg-emerald-400 text-xl mr-2">Github</a>
              <a href="https://netflix-clone-69a94.firebaseapp.com/" className="rounded-md px-4 py-2 text-white bg-emerald-400 text-xl mr-2">Live</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
