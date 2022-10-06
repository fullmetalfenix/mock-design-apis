import React from 'react'
import styles from './TopBar.module.css';


export default function TopBar({profile}) {
    return (
        <div className={styles.container}>
            <h2>{profile? `Welcome ${profile.givenName}.` : ''}</h2> 
        </div>
    )
}
