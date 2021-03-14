import React from 'react'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'

const pageTwo = () => {
  return(
    <div>
       <NavBar />
       <Layout>
       <p>This is pageTwo?</p>
       </Layout>
    </div>
  )
}
export default pageTwo

// import React from 'react'
// import Link from 'next/link'


// const pageTwo =()=>{
//       return(
//             <div>
//                   <Link href="/">
//                   <a><h1> back </h1></a>
//                   </Link>
//                   <p>This is page two.</p>
//             </div>
//       )
// }

// export default pageTwo