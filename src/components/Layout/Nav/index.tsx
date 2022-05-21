import {FC, ReactElement} from 'react'
import './index.scss'
import {TreeItem, TreeView} from '@mui/lab'
import {ChevronRight, ExpandMore} from '@mui/icons-material'

interface Node {
  id: string
  name: string
  children?: Node[]
}

export const Nav: FC = (): ReactElement => {

  const load = (): Node[] => {
    return [
      {
        id: '1',
        name: '顶级节点1',
        children: [
          {
            id: '1-1',
            name: '字节点-11'
          },
          {
            id: '1-2',
            name: '字节点-12',
            children: [
              {
                id: '1-2-1',
                name: '字节点-121',
              }
            ]
          }
        ]
      },
      {
        id: '2',
        name: '顶级节点2',
        children: [
          {
            id: '2-1',
            name: '字节点-21'
          },
          {
            id: '2-2',
            name: '字节点-22',
            children: [
              {
                id: '2-2-1',
                name: '字节点-221',
              }
            ]
          }
        ]
      }
    ]
  }

  const render = () => {
    let nodes = load()
    return (
      <>
        {nodes.map(node => renderNode(node))}
      </>
    )
  }

  const renderNode = (node: Node) => {
    return (
      <TreeItem key={node.id} nodeId={node.id} label={node.name}>
        {
          Array.isArray(node.children)
            ? node.children.map(n => renderNode(n))
            : null
        }
      </TreeItem>
    )
  }

  return (
    <TreeView
      aria-label={'数据对象'}
      defaultExpanded={['root']}
      defaultCollapseIcon={<ExpandMore/>}
      defaultExpandIcon={<ChevronRight/>}
    >
      {
        render()
      }
    </TreeView>
  )
}
