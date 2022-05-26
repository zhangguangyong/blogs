import React from 'react'
import {uuid} from 'utils'
import type {DataNode} from 'antd/lib/tree'

// 状态
export interface MenuNode extends DataNode {
  route?: string
}

export interface INav {
  title: string
  menus: MenuNode[]
}

export interface IState {
  navs: INav[],
  currentNav: INav
}

// 动作
export enum ActionType {
  NAV_CLICK,
  MENU_CLICK
}

export interface IAction {
  type: ActionType
  payload?: INav | MenuNode
}


// 共享上下文
export interface IContext {
  state: IState,
  dispatch: (action: IAction) => void
}

export const LayoutContext = React.createContext<IContext | null>(null!)

// 初始化
export const initState = (): IState => {
  const navs: INav[] = [
    {
      title: 'Linux',
      menus: [
        {
          key: uuid(),
          title: '初始设置',
          route: '/linux/01'
        },
        {
          key: uuid(),
          title: '软件安装',
          route: '/linux/02'
        }
      ]
    },
    {
      title: 'Java',
      menus: [
        {
          key: uuid(),
          title: 'JDK安装配置',
          children: [
            {
              key: uuid(),
              title: '下载安装'
            },
            {
              key: uuid(),
              title: '配置环境变量'
            }
          ]
        }
      ]
    }
  ]
  const currentNav: INav = navs[0]
  return {
    navs,
    currentNav
  }
}


// const findParents = (menu: DataNode): string[] => {
//   const parents: string[] = []
//   deepParents(menu, parents)
//   return parents
// }
// const deepParents = (menu: DataNode, parents: string[]) => {
//   if (menu.children && menu.children.length) {
//     parents.push(menu.key as string)
//     deepParents(menu.children[0], parents)
//   }
// }
