import React from 'react'
import banner from './Banner.png'
import styles from './Banner.module.scss'


export default function Banner() {
  return (
    <div className={styles.banner}>
        
        <img src={banner} alt="banner" />
    </div>
  )
}
