import React from 'react'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'

const pageThree = () => {
  return(
    <div>
       <NavBar />
       <Layout>
         <h1>hello</h1>
       <p>This is pageThree?</p>
       <p>hi</p>
       </Layout>
    </div>
  )
}
export default pageThree

// import React from 'react'
// import Link from 'next/link'

// const pageThree =()=>{
//       return(
//             <div>
//                   <Link href="/">
//                   <a><h1> back </h1></a>
//                   </Link>
//                   <p>This is page three.</p>
//             </div>
//       )
// }

// export default pageThree