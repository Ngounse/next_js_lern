import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'



const DynamicPage = () => {
      const router = useRouter()

      const { title } = router.query

  return(
    <div className="DynamicPage__container">
       <NavBar />
       <Layout>
            <h1>{title}</h1>
            <p>This is DynamicPage using query string?</p>
       </Layout>
    </div>
  )
}
export default DynamicPage
