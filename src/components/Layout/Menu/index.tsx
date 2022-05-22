import {FC, ReactElement, useContext, useEffect, useState} from 'react'
import './index.scss'
import {Tree} from 'antd'
import {LayoutContext} from 'components/Layout/types'
import {DataNode} from 'antd/lib/tree'

export const Menu: FC = (): ReactElement => {
  let {state, dispatch} = useContext(LayoutContext)!
  let [expanded, setExpanded] = useState<string[]>()

  useEffect(() => {
    setExpanded(findParents(state.checkedNav.menus[0]))
  }, [state.checkedNav])

  const findParents = (menu: DataNode): string[] => {
    const parents: string[] = []
    deepParents(menu, parents)
    return parents
  }
  const deepParents = (menu: DataNode, parents: string[]) => {
    if (menu.children && menu.children.length) {
      parents.push(menu.key as string)
      deepParents(menu.children[0], parents)
    }
  }

  return (
    <Tree
      treeData={state.checkedNav.menus}
    />
  )
}
