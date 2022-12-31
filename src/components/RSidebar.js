import './RSidebar.css'
import {useCollection} from '../hooks/useCollection'
import React from 'react'
import Avatar from './Avatar'

export default function RSidebar() {
  const {error, documents, isPending} = useCollection('users')

  return (
    <div className='rsidebar'>
      <h2>All users</h2>
      {isPending && <div>Loading users...</div>}
      {error && <div className='error'>{error}</div>}
      {documents && documents.map(user=>(
        <div key={user.online} className='rsidebar-item'>
            {user.online && <span className="online-user"></span>}
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
        </div>
      ))}
    </div>
  )
}
