import React from 'react'
import Navbar from '../components/Navbar'
import JobListings from '../components/JobListings'

const JobsPage = () => {
  return (
        <>
        <JobListings isHome={false} />
            {/* <Navbar /> */}
        </>
  )
}

export default JobsPage