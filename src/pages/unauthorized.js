import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'
import React from 'react'

const UnAuthorizedPage = () => {
    const router = useRouter()
    return (
    <div>
        <h1>{`You don't have authority to access this page`}</h1>
        <button onClick={() => router.push('/login')}>Login</button>
    </div>
  )
}

export default UnAuthorizedPage