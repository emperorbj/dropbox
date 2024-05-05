import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DropLogo from '../assets/icons8-dropbox-48.png';
import { ThemeToggler } from './ThemeToggler';

const Header = () => {
    return (
        <header className='flex items-center justify-between'>
            <Link href="/" className='flex items-center gap-1'>
                <div>
                    <Image src={DropLogo} alt='logobox' width={40} height={45}/>
                </div>
                <h1 className='font-bold text-lg'>Dropbox</h1>
            </Link>
            <div className=' items-center px-[10px] py-[10px]'>
                <ThemeToggler/>
                <button className='text-lg font-medium px-[10px]'>Sign in</button>
            </div>
        </header>
    )
}

export default Header
