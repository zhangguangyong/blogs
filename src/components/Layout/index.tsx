import {FC, ReactElement} from 'react'
import './index.scss'
import {Main} from 'components/Layout/Main'
import {Nav} from 'components/Layout/Nav'
import {Menu} from 'components/Layout/Menu'

export const Layout: FC = (): ReactElement => {
  return (
    <div className="layout-component">
      <div className={'top'}>
        <Nav/>
      </div>

      <div className={'bottom'}>
        <div className={'left'}>
          <Menu/>
        </div>
        <div className={'right'}>
          <Main/>
        </div>
      </div>
    </div>
  )
}
