"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import { UserDetailContext } from '../../context/UserDetailContext'
import { Button } from '../ui/button';
import { Card } from '../ui/card';

function WorkspaceBody() {
  const ctx = useContext(UserDetailContext);
  const userDetails = ctx?.userDetails;

  return (
    <div>
    <div className='flex justify-between items-center'>
        <h2 className='text-4xl font-medium'>Workspace</h2>
        <h2 className='text-blue-800 bg-blue-100 px-2 rounded-lg'>Remaining Credits: {userDetails?.credits ?? 0}</h2>
    </div>
    <Card className='mt-5 flex justify-between items-center p-4 border rounded-lg'>
        <div className={'mt-5 flex items-center gap-4 '}>
        <Image src={'/github.png'} alt='github' width={40} height={200} />
        <h2 className='text-2xl font-medium'>Connect Github & Add Repo</h2>
        <div>
            </div>
            <Button>Install</Button>
        </div>
    </Card>
    </div>
  )
}

export default WorkspaceBody