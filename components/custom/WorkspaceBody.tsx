"use client"
import React, { useContext } from 'react'
import { UserDetailContext } from '../../context/UserDetailContext'

function WorkspaceBody() {
  const ctx = useContext(UserDetailContext);
  const userDetails = ctx?.userDetails;

  return (
    <div>
        <h2 className='text-4xl font-medium'>Workspace</h2>
        <h2 className='text-blue-800 bg-blue-100 px-2 rounded-lg'>Remaining Credits: {userDetails?.credits ?? 0}</h2>
    </div>
  )
}

export default WorkspaceBody