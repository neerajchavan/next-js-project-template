import React from 'react'

const ProtectedPage = () => {
  return (
    <div>ProtectedPage</div>
  )
}

ProtectedPage.requireAuth = true;
export default ProtectedPage

