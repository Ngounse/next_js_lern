// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import fetch from 'isomorphic-unfetch'
import React ,{ useState } from 'react'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'

const IndexPage = () => {
  const [title, setTitle] = useState('')
  return(
    <div>
       <NavBar />
       <Layout>
       <p>This is index page?</p>
       
       
         <input 
         type="text" 
         placeholder="Input title"
         onChange={e=> setTitle(e.target.value)}
         />
        <Link href={`/DynamicPage?title=${title}`}>
          <a>Go to Dynamicpage</a>
        </Link>
        </Layout>
    </div>
  )
}
export default IndexPage





//  const Home = () => {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>fetch dada from aip</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className={styles.main}>
//         <h1 className={styles.title}>
//         fetch data <a href="http://localhost:3000/posts/a">from aip!</a>
//         </h1>
//         <div>
//             <input type="text" placeholder="...." value=""/>
//             <button>Search</button>
//         </div>
//       </main>
//     </div>
//   )
// }
// export default Home


// export default function Home(){
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>fetch dada from aip</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//         fetch data <a href="http://localhost:3000/posts/a">from aip!</a>
//         </h1>
//         <div>
//             <input type="text" placeholder="...." value=""/>
//             <button>Search</button>
//         </div>
//       </main>
//     </div>
//   )
// }