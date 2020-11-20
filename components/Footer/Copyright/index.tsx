import React from 'react'
import styles from './index.module.scss'

type Props = {}

const Copyright: React.FC<Props> = () => {
  // TODO: zh

  return (
    <div className={styles.copyright}>
      <div>COPYRIGHT © 2020 PHALA.LTD ALL RIGHTS RESERVED. </div>
      <div>May Phala be with you!</div>
    </div>
  )
}

export default Copyright
