import React from 'react'
import { PageMinerConfig } from '../../config/PageMiner'
import NormalLayout from '../NormalLayout'
import styles from './index.module.scss'
import DetailPageHeader from '../DetailPageHeader'
import PageTitle from '../PageTitle'
import HeaderButtons from './HeaderButtons'
import FloatMenu from '../FloatMenu'
import WhyNeed from './WhyNeed'
import Environment from './Environment'
import LoanAgreement from './LoanAgreement'
import Cooperative from './Cooperative'
import Rewards from './Rewards'
import BgLayer from '../BgLayer'

type Props = {}

const PageMiner: React.FC<Props> = () => {
  return (
    <BgLayer backgroundUrl='/images/PageMiner/bg2.png'>
      <PageTitle zh='矿工' en='Miner'></PageTitle>

      <NormalLayout className={styles.pageMiner}>
        <div className='container'>
          <DetailPageHeader {...PageMinerConfig}></DetailPageHeader>

          <HeaderButtons></HeaderButtons>

          <div id='content' className={styles.content}>
            {PageMinerConfig.content.map((item, index) => {
              const Component =
                {
                  WhyNeed,
                  Environment,
                  LoanAgreement,
                  Cooperative,
                  Rewards,
                }[item.id] ?? Cooperative

              return (
                <Component
                  {...item}
                  index={index + 1}
                  key={JSON.stringify(item.name)}></Component>
              )
            })}

            <FloatMenu
              menuTitle={PageMinerConfig.menuTitle}
              menu={PageMinerConfig.content}
            />
          </div>
        </div>
      </NormalLayout>
    </BgLayer>
  )
}

export default PageMiner
