import React from 'react'
import {uuid} from 'utils'

// 状态
export interface IMenu {
  id: string,
  name: string
  children?: IMenu[]
}

export interface INav {
  name: string
  menus: IMenu[]
}

export interface IState {
  navs: INav[]
  checkedNav: INav
  checkedMenu: IMenu
}

// 动作
export enum ActionType {
  NAV_CLICK,
  MENU_CLICK
}

export interface IAction {
  type: ActionType
  payload?: INav | IMenu
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
      name: 'Linux',
      menus: [
        {
          id: uuid(),
          name: '常用命令',
          children: [
            {
              id: uuid(),
              name: 'cd'
            },
            {
              id: uuid(),
              name: 'pwd'
            }
          ]
        },
        {
          id: uuid(),
          name: 'Shell脚本',
          children: [
            {
              id: uuid(),
              name: 'for循环'
            },
            {
              id: uuid(),
              name: 'if条件'
            }
          ]
        }
      ]
    },
    {
      name: 'Java',
      menus: [
        {
          id: uuid(),
          name: 'JDK安装配置',
          children: [
            {
              id: uuid(),
              name: '下载安装'
            },
            {
              id: uuid(),
              name: '配置环境变量'
            }
          ]
        }
      ]
    }
  ]
  const checkedNav: INav = navs[0]
  const checkedMenu: IMenu = checkedNav.menus[0]

  return {
    navs,
    checkedNav,
    checkedMenu
  }
}
