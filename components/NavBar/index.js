import React from 'react'
import Link from  'next/link'
import Style from './style.module.css'

const index=()=>{
      return(
            <div className={Style.container}>
                  <h1> hello</h1>
            <ul>
                  <li>
                        <Link href="/">
                        <a>Home</a>
                        </Link>
                  </li>
                  <li>
                        <Link href="/pageOne">
                        <a>PageOne</a>
                        </Link>
                  </li>
                  <li>
                        <Link href="/pageTwo">
                        <a>PageTwo</a>
                        </Link>
                  </li>
                  <li>
                        <Link href="/pageThree">
                        <a>PageThree</a>
                        </Link>
                  </li>
            </ul>
            </div>
      )
}

export default index