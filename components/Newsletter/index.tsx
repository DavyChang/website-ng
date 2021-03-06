import React, { useState } from 'react'
import styles from './index.module.scss'
import Marquee from 'react-fast-marquee'
import IconClose from './IconClose'
import I18n from '../I18n'
import { newsletterConfig } from '../../config/newsletterConfig'
import TagA from '../TagA'

type Props = {}

const Newsletter: React.FC<Props> = () => {
  const [visible, setVisible] = useState(true)

  function close() {
    setVisible(false)
  }

  const news = newsletterConfig.map((item) => {
    return (
      <div key={JSON.stringify(item)} className={styles.news}>
        <TagA href={item.link}>
          <I18n {...item.news}></I18n>
        </TagA>
      </div>
    )
  })

  return visible ? (
    <div className={styles.newsletter}>
      <Marquee
        pauseOnHover={true}
        gradient={false as any}
        speed={20}
        direction='left'>
        {news}
        {news}
      </Marquee>
      <div className={styles.line}></div>
      <IconClose onClick={close} />
    </div>
  ) : null
}

export default Newsletter
