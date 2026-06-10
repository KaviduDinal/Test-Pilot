import React from 'react'
import layout from '../layout'
import WorkspaceHeader from '@/components/custom/WorkspaceHeader'

const workspaceLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <WorkspaceHeader />
      {children}
    </div>
  )
}

export default workspaceLayout