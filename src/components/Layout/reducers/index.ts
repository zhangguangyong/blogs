import {ActionType, IAction, INav, IState} from 'components/Layout/types'

export const layoutReducer = (state: IState, action: IAction) => {
  if (action.type === ActionType.NAV_CLICK) {
    let checkedNav = action.payload as INav
    return {...state, checkedNav, checkedMenu: checkedNav.menus[0]}
  }

  return state
}
