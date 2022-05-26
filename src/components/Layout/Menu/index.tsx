import {FC, ReactElement, useContext} from 'react'
import './index.scss'
import {Tree} from 'antd'
import {LayoutContext, MenuNode} from 'components/Layout/types'
import {useNavigate} from 'react-router-dom'
import type {TreeProps} from 'antd/lib/tree'

export const Menu: FC = (): ReactElement => {
  const {DirectoryTree} = Tree
  let {state, dispatch} = useContext(LayoutContext)!
  let {currentNav} = state

  let navigate = useNavigate()
  const handleSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    let node = info.node as MenuNode
    if (node.route) {
      navigate(node.route)
    }
  }
  return (
    <DirectoryTree
      showIcon={false}
      treeData={currentNav.menus}
      onSelect={handleSelect}
    />
  )
}
