import {FC, ReactElement} from 'react'
import './index.scss'
import {Main} from 'components/Layout/Main'
import {Nav} from 'components/Layout/Nav'

export const Layout: FC = (): ReactElement => {
  return (
    <div className="layout-component">
      <div className={'top'}>
        top
      </div>

      <div className={'bottom'}>
        <div className={'left'}>
          <Nav/>
        </div>
        <div className={'right'}>
          <Main/>
        </div>
      </div>
    </div>
  )
}
