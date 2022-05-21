import {FC, ReactElement, useContext} from 'react'
import './index.scss'
import {Button} from '@mui/material'
import {ActionType, INav, LayoutContext} from 'components/Layout/types'
import {uuid} from 'utils'

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
          variant={'text'}
          onClick={() => handleClick(item)}
        >
          {item.name}
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
