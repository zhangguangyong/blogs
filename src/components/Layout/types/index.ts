import React from 'react'
import {uuid} from 'utils'
import type {DataNode} from 'antd/lib/tree'

// 状态

export interface INav {
  title: string
  menus: DataNode[]
}

export interface IState {
  navs: INav[]
  checkedNav: INav
  checkedMenu: DataNode

}

// 动作
export enum ActionType {
  NAV_CLICK,
  MENU_CLICK
}

export interface IAction {
  type: ActionType
  payload?: INav | DataNode
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
          title: '常用命令',
          children: [
            {
              key: uuid(),
              title: 'cd',
              children: [
                {
                  key: uuid(),
                  title: '当前目录'
                },
                {
                  key: uuid(),
                  title: '跳转到当前目录'
                }
              ]
            },
            {
              key: uuid(),
              title: 'pwd'
            }
          ]
        },
        {
          key: uuid(),
          title: 'Shell脚本',
          children: [
            {
              key: uuid(),
              title: 'for循环'
            },
            {
              key: uuid(),
              title: 'if条件'
            }
          ]
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
  const checkedNav: INav = navs[0]
  const checkedMenu: DataNode = checkedNav.menus[0]

  return {
    navs,
    checkedNav,
    checkedMenu
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
