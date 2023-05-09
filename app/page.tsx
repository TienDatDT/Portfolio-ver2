'use client'
import Head from 'next/head'
import { useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillCalendar, AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { HiLocationMarker } from 'react-icons/hi'
import { DiCss3, DiHtml5, DiJavascript, DiReact, DiMongodb, DiMysql } from 'react-icons/di'
import Person from './components/ImageIcon'
import Link from 'next/link';

export default function Home() {
  const [mode, setMode] = useState(false)
  return (
    <>
      <Head>
        <title>Tien Dat Portfolio</title>
        <meta name="description" content="Portfolio" />
      </Head>
      <main className=''>
        <section className='min-h-screen px-10'>
          <nav className='py-10 mb-10 flex justify-between items-center'>
            <h1 className='text-xl shadow-lg'>DEVELOPED BY TIEN DAT</h1>
            <ul className='flex flex-row justify-center items-center'>
              <li className='text-xl mx-4 cursor-pointer' >
                <BsFillMoonStarsFill />
              </li>
              <li className='px-4 py-2 bg-gradient-to-r from-blue-800 to-blue-500 rounded text-white'>
                <a target='_blank' href='/public/files/CV_Nguyen_Tien_Dat_Frontend_Developer.pdf' download>Resume</a>
              </li>
            </ul>
          </nav>
          <div className='flex flex-col gap-3 text-center mb-4'>
            <h2 className='text-5xl text-blue-800 font-bold '>Nguyen Tien Dat</h2>
            <h3 className='text-3xl'>Front-end Developer</h3>
            <p className='text-md leading-8'>I am at four years student, freelancer, I want to find a internship job to completed my study</p>
          </div>
          <div className='text-3xl flex flex-row justify-center gap-8'>
            <Link target='_blank' className='cursor-pointer hover:opacity-[0.3]' href='https://www.facebook.com/profile.php?id=100045502650981'>
              <AiFillFacebook color='blue' />
            </Link>
            <Link target='_blank' className='cursor-pointer hover:opacity-[0.3]' href='https://github.com/TienDatDT/'>
              <AiFillGithub />
            </Link>
            <Link target='_blank' className='cursor-pointer hover:opacity-[0.3]' href=''>
              <AiFillLinkedin />
            </Link>
          </div>
          <div className='flex flex-row items-center justify-center gap-10 mt-20'>
            <div className='w-80 h-80 relative bg-gradient-to-t from-blue-300 to-blue-100 rounded-full overflow-hidden'>
              <Person />
            </div>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <h3 className='text-blue-400 text-3xl mb-4'>My Skills</h3>
            <h3 className='mb-4 font-bold'>Front-end</h3>
            <ul className='flex flex-col justify-center items-center gap-4 text-xl'>
              <li className='flex'><DiHtml5 color='orange' /><DiCss3 color='blue' />HTML/CSS</li>
              <li className='flex'><DiJavascript color='yellow' />JavaScript</li>
              <li className='flex'><DiReact color='' />ReactJS</li>
              <li className='flex'></li>
            </ul>
            <h3 className='mb-4 font-bold'>Database</h3>
            <ul className='flex flex-col justify-center items-center gap-4 text-xl'>
              <li className='flex'><DiMongodb color='green' />MongoDB</li>
              <li className='flex'><DiMysql />MySQL</li>
            </ul>

          </div>
        </section>
      </main >

    </>
  )
}
