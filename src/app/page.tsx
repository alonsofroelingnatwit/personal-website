"use client";
import Image from 'next/image'
import { ReactNode, useEffect, useState } from 'react';

export default function Home() {
  return (
    <main className='relative h-[dvh] w-screen overflow-x-hidden'>
      <Image className='absolute w-full h-full' src="/bg-img.jpg" alt='bg-img' layout='fill' objectFit='cover' />

      <div className='absolute left-1/2 -translate-x-1/2 w-full h-full max-w-2xl mx-auto'>
        <div className='flex flex-col w-full h-full items-center justify-between p-4'>
          <div className='flex flex-col items-center w-full'>
            <FullDate />
            <CurrentTime />
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <Notification title='Nicolas Alonso Froeling' link='#' icon='/profile-img.JPG' description={
              <>
              Fullstack developer studying Computer Science and Minor in Applied Math.
              <br/>
              Playing golf in the athletic golf team at Wentworth Institute of Technology.
              <br/>
              Surfing whenever I have time.
              <br/>
              I have created a few websites and web apps. Very interested in AI, VR, and AR.
                    </>
            } />
            <Notification title='GitHub' link='#' icon='/github.png' description={<>Check out projects on my GitHub</>} />
            <Notification title='LinkedIn' link='#' icon='/linkedin.png' description={<>Connect with me on LinkedIn</>} />
            <Notification title='Resume' link='#' icon='/resume.png' description={<>View or Download my resume</>} />
          </div>
        </div>
      </div>
    </main>
  )
}

function FullDate() {

  const date = new Date();
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const weekDay = weekDays[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  return (
    <p className='md:text-xl text-lg font-semibold md:pt-20 pt-8'>{`${weekDay}, ${month} ${day}`}</p>
  );
}

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <p className='md:text-9xl text-8xl font-bold'>{formatTime(currentTime)}</p>
  );
}


function formatTime(date:any) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  // Pad the minutes and hours with leading zeros, if required
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  return `${hours}:${minutes}`;
}

type NotificationProps = {
  link: string;
  title: string;
  description: ReactNode;
  icon: string;
}
function Notification(props:NotificationProps) {
  return(
    <div className='flex w-full items-start bg-zinc-800/40 rounded-[1.75rem] backdrop-blur-md p-4'>
      <Image src={props.icon} alt='profile' width={75} height={75}  className='rounded-full md:h-[75px] md:w-[75px] h-[44px] w-[44px]' />
      <div className='flex flex-col w-full pl-2'>
        <div className='flex w-full justify-between items-center md:p-2 px-2'>
          <p className='md:text-xl text-base leading-tight font-semibold'>
            {props.title}
          </p>
          <p className='md:text-sm text-xs px-2 text-zinc-300'>
            now
          </p>
        </div>
        <p className='px-2 md:text-xl text-base font-light'>
          {props.description}
        {/* Fullstack developer studying Computer Science and Minor in Applied Math.
        <br/>
        Playing golf in the athletic golf team at Wentworth Institute of Technology.
        <br/>
        Surfing whenever I have time.
        <br/>
        I have created a few websites and web apps. Very interested in AI, VR, and AR. */}
        </p>
      </div>
    </div>
  )
}