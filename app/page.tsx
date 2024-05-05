import { ArrowBigRight, ArrowBigRightIcon, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className=" w-full h-screen">
      <div>
        <div className="p-10 flex flex-col bg-[#282929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-4xl font-bold">
            Welcome to a cloned drop box made by Bee Jay
            <br/>
            <br/>
            Feel free to try this cloud storage platform made with ❤
          </h1>
          <p className="pb-20">
          Collaborate seamlessly and deliver work faster from anywhere with Dropbox. 
          Securely store your content, edit PDFs, share videos, 
          sign documents and track file engagement—without leaving Dropbox.
          </p>
          <Link href='/dashboard' className='flex cursor-pointer w-fit text-lg font-medium text-white rounded-md px-[15px] bg-blue-600 py-[10px]'>
            Try for free
            <ArrowRight/>
          </Link>
        </div>
      </div>
      <p className="text-center font-bold text-3xl text-red-400 p-2">Disclaimer</p>
      <p className="text-2xl text-center text-wrap mx-[250px] p-2"> Please be informed that this application is just for educational and learning purposes
        we have no affiliations with the official drop box LLC
      </p>
    </main>
  );
}
