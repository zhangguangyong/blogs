import {FC, ReactElement, useContext} from 'react'
import './index.scss'
import {Tree} from 'antd'
import {LayoutContext} from 'components/Layout/types'

export const Menu: FC = (): ReactElement => {
  const {DirectoryTree} = Tree
  let {state, dispatch} = useContext(LayoutContext)!
  let {checkedNav} = state

  return (
    <DirectoryTree
      showIcon={false}
      treeData={checkedNav.menus}
    />
  )
}
