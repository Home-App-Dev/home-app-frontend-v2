'use client';
import Image from 'next/image';
import HomeLogo from '../assets/Logo.svg';
import Link from 'next/link';
// import { useUser } from '@auth0/nextjs-auth0/client';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';

export default function Sidebar(){
  // const { user } = useUser();

  return(
    <section className='flex h-screen w-60 flex-col items-center bg-[#202020] px-5 pb-12 pt-10'>
      <Image src={HomeLogo} alt='home logo' width={140} height={56}/>
      <ul className='space-y-3 pt-16 text-left text-white'>

        <li className='h-11 w-[12.5rem]'>
          <Link 
            className='flex size-full items-center justify-center' 
            href="/"  
          >
            Dashboard
          </Link>
        </li>
        
        <li className='h-11 w-[12.5rem]'>
          <Link className='flex size-full items-center justify-center' href="/adverts">Anúncios</Link>
        </li>
        <li className='h-11 w-[12.5rem]'>
          <Link className='flex size-full items-center justify-center' href="/properties">Imóveis</Link>
        </li>
        <li className='h-11 w-[12.5rem]'>
          <Link className='flex size-full items-center justify-center' href="/performance">Desempenho</Link>
        </li>
      </ul>

      <div className='mt-[30.3125rem]'>
        <Link 
          className="flex h-14 w-48 items-center gap-3 rounded border border-[#404040] bg-[#272727] px-2 py-1"
          href='/user'
        >
          <div>
            <Avatar>
              <AvatarImage className='size-12 rounded' src='https://github.com/Ciarlini20.png'/>
            </Avatar>
          </div>
          <div className='flex flex-col justify-start'>
            <h3 className='text-lg text-white'>Nome</h3>
            <p className='text-lg text-[#9c9c9c]'>role</p>
          </div>
        </Link>
        {/* { !user ? (
          <a
            href="/api/auth/login"
            className="flex h-14 w-48 items-center justify-center rounded-md bg-slate-500 text-white"
          >
            Login
          </a>
        ) : (
          <div className="flex h-14 w-48 border border-[#404040] bg-[#272727]">
            avatar
            Nome
            role
          </div>
        )
        } */}

      </div>

    </section>
  );
} 