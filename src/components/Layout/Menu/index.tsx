import {FC, ReactElement, useContext} from 'react'
import './index.scss'
import {TreeItem, TreeView} from '@mui/lab'
import {ChevronRight, ExpandMore} from '@mui/icons-material'
import {IMenu, LayoutContext} from 'components/Layout/types'
import {uuid} from 'utils'

export const Menu: FC = (): ReactElement => {
  let {state, dispatch} = useContext(LayoutContext)!

  const render = () => {
    let menus = state.checkedNav?.menus!
    return (
      <>
        {menus.map(node => renderNode(node))}
      </>
    )
  }

  const renderNode = (menu: IMenu) => {
    return (
      <TreeItem key={uuid()} nodeId={menu.id} label={menu.name}>
        {
          Array.isArray(menu.children)
            ? menu.children.map(n => renderNode(n))
            : null
        }
      </TreeItem>
    )
  }

  return (
    <TreeView
      aria-label={'目录'}
      defaultExpanded={[state.checkedNav.menus[0].id]}
      defaultSelected={state.checkedMenu.id}
      defaultCollapseIcon={<ExpandMore/>}
      defaultExpandIcon={<ChevronRight/>}
    >
      {
        render()
      }
    </TreeView>
  )
}
