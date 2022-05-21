import {FC, ReactElement, useReducer} from 'react'
import './index.scss'
import {Main} from 'components/Layout/Main'
import {Nav} from 'components/Layout/Nav'
import {Menu} from 'components/Layout/Menu'
import {layoutReducer} from 'components/Layout/reducers'
import {initState, LayoutContext} from 'components/Layout/types'

export const Layout: FC = (): ReactElement => {

  let [state, dispatch] = useReducer(layoutReducer, initState())

  return (
    <LayoutContext.Provider value={{state, dispatch}}>
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
    </LayoutContext.Provider>
  )
}
