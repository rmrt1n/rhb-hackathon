import Link from 'next/link';
import Image from 'next/image';
import { Progress } from '@chakra-ui/react'

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] max-w-5xl p-4 lg:px-0 m-auto space-y-4 my-4">
      <h1 className="text-xl font-bold mb-4 inline-block">Your Project</h1>
      <Link href="/sme/profile" className="mx-5 my-1 inline-block">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
      </Link>
      <div className="relative w-full h-96">
        <Image src="/proj.jpg" alt="proj thumbnail" fill />
      </div>
      <div className="space-y-2">
        <h2 className="font-bold text-xl">Investment status</h2>
        <Progress value={35} />
        <p>MYR 17.5M invested from MYR 50M target</p>
      </div>
      <div className="space-y-2">
        <h2 className="font-bold text-xl">Banks invested:</h2>
        <ul className="flex">
          <li className="relative h-16 w-full">
            <Image fill src="/logo_default.png" alt="rhb logo" objectFit="contain" />
          </li>
          <li className="relative h-16 w-full">
            <Image fill src="/public_bank.png" alt="public bank logo" objectFit="contain" />
          </li>
          <li className="relative h-16 w-full">
            <Image fill src="/cimb.png" alt="cimb logo" objectFit="contain" />
          </li>
        </ul>
      </div>
    </div>
  )
}
