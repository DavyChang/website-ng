import { useRouter } from 'next/router'
import React from 'react'
import I18n from '../I18n'
import styles from './index.module.scss'
import Link from 'next/link'
import TagA from '../TagA'

type Props = {
  data: any
}

const ListMenu: React.FC<Props> = (props) => {
  const { data } = props
  const { locale } = useRouter()

  return (
    <div className={styles.listMenu}>
      <div className={styles.title}>
        {data?.href?.[locale] && (
          <TagA href={data?.href}>
            <I18n {...data.name}></I18n>
          </TagA>
        )}
        {!data?.href?.[locale] && <I18n {...data.name}></I18n>}
      </div>

      {data.subMenu && (
        <div className={styles.items}>
          {data.subMenu.map((item) => {
            return (
              <div className={styles.item} key={item.name.en}>
                <TagA href={item?.href}>
                  <I18n {...item.name}></I18n>
                </TagA>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ListMenu
