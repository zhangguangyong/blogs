import {FC, ReactElement} from 'react'
import './index.scss'
import {Button} from '@mui/material'


export const Nav: FC = (): ReactElement => {
  const render = () => {
    return (
      <>
        <Button variant={'text'}>Linux</Button>
        <Button variant={'text'}>Mac</Button>
        <Button variant={'text'}>Java</Button>
        <Button variant={'text'}>MySQL</Button>
      </>
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
