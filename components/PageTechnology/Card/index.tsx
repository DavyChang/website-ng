import { useRouter } from 'next/router'
import React from 'react'
import CardContent, { CardContentProps } from '../../CardContent'
import CardHeader, { CardHeaderProps } from '../../CardHeader'
import styles from './index.module.scss'

type Props = {
  content: any
} & CardHeaderProps &
  CardContentProps

const Card: React.FC<Props> = (props) => {
  const { name, index, bgIndex, content } = props
  const { locale } = useRouter()

  return (
    <div className={styles.card} id={name[locale].join('_')}>
      <CardHeader
        className={styles.cardHeader}
        name={name}
        index={index}></CardHeader>
      <CardContent className={styles.cardContent} bgIndex={bgIndex}>
        {content?.[locale]?.map((text) => {
          return <p key={text}>{text}</p>
        })}
      </CardContent>
    </div>
  )
}

export default Card
