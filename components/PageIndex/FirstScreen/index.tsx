import React, { useEffect } from 'react'
import Button from '../../Button'
import styles from './index.module.scss'
import classnames from 'classnames'
import I18n from '../../I18n'
import { DarkWalletConfig, ExplorerConfig } from '../../../config'

type Props = {}

const FirstScreen: React.FC<Props> = () => {
  const title = {
    en: ['Mask', 'yourself', 'on blockchain'],
    zh: ['Phala Network', '给区块链打上马赛克'],
  }

  return (
    <section className={classnames([styles.firstScreen])}>
      <div className={styles.bg}></div>
      <div className={classnames(['container', styles.content])}>
        <div className={styles.title}>
          <I18n render={(str) => <div key={str}>{str}</div>} {...title}></I18n>
        </div>
        <div className={styles.description}>
          <I18n
            en='Blockchain Confidentiality by Trusted Computing'
            zh='使用隐私计算保卫区块链上秘密'></I18n>
        </div>
        <div className={styles.buttons}>
          <Button
            text={DarkWalletConfig.name}
            href={DarkWalletConfig.href}
            className={styles.button}
            type='link'
            color='primary'></Button>
          <Button
            text={ExplorerConfig.name}
            href={ExplorerConfig.href}
            className={styles.button}
            hasArrowIcon
            type='link'
            color='gray'></Button>
        </div>
      </div>
    </section>
  )
}

export default FirstScreen
