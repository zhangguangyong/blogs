import {FC, ReactElement, useContext} from 'react'
import './index.scss'
import {ActionType, INav, LayoutContext} from 'components/Layout/types'
import {uuid} from 'utils'
import {Button} from 'antd'

export const Nav: FC = (): ReactElement => {
  let {state, dispatch} = useContext(LayoutContext)!

  const handleClick = (item: INav) => {
    dispatch({type: ActionType.NAV_CLICK, payload: item})
  }

  const render = () => {
    return (
      state.navs.map((item) => (
        <Button
          key={uuid()}
          type={'text'}
          onClick={() => handleClick(item)}
        >
          {item.title}
        </Button>
      ))
    )
  }

  return (
    <>
      {
        render()
      }
    </>
  )
}
