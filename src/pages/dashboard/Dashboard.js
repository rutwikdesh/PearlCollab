import './Dashboard.css'
import { useCollection } from '../../hooks/useCollection'
import React from 'react'
import ProjectList from '../../components/ProjectList'
import ProjectFilter from './ProjectFilter'
import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'


export default function Dashboard() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('projects')
  const [currentFilter, setCurrentFilter] = useState('all')

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter)
  }

  const filteredProjects = documents ? documents.filter(document => {
    switch (currentFilter) {
      case 'all':
        return true
      case 'mine':
        let assignedToMe = false
        document.assignedUsersList.forEach(u => {
          if (u.id === user.uid) {
            assignedToMe = true
          }
        })
        return assignedToMe
      case 'development':
      case 'design':
      case 'sales':
      case 'marketing':
      case 'hr':
        return document.category === currentFilter
      default:
        return true
    }
  }) : null

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <div className='error'>{error}</div>}
      {documents && (
        <ProjectFilter currentFilter={currentFilter} changeFilter={changeFilter}
        />)}
      {filteredProjects && <ProjectList projects={filteredProjects} />}
    </div>
  )
}
