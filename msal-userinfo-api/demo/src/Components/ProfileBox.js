import React from 'react'
import styles from './ProfileBox.module.css';

export default function ProfileBox({profileInfo}) {
    return (
        <div className={styles.profileBoxContainer}>
            <p className={styles.name}>{profileInfo? profileInfo.displayName: '' }</p>
            <p className={styles.title}>{profileInfo? profileInfo.jobTitle: '' }</p>
        </div>
    )
}
