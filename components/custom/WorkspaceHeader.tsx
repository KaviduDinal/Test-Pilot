import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

function WorkspaceHeader() {
  return (
    <div className='flex w-full justify-between p-4'>
        {/* Logo */}
        <Image src={'/logo.svg'} alt='Logo' width={200} height={300} />
        {/* menu option */}
        <ul className='flex gap-5 text-xl'>
            <li className='hover:text-green-600 cursor-pointer'>Workspace</li>
            <li className='hover:text-green-600 cursor-pointer'>Pricing</li>
            <li className='hover:text-green-600 cursor-pointer'>Support</li>    
        </ul>
        {/* UserButton */}
        <UserButton />
        {/* Profile */}
    </div>
  )
}

export default WorkspaceHeader