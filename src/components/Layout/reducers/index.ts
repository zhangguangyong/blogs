import {ActionType, IAction, INav, IState} from 'components/Layout/types'

export const layoutReducer = (state: IState, action: IAction) => {
  if (action.type === ActionType.NAV_CLICK) {
    let currentNav = action.payload as INav
    return {...state, currentNav}
  }

  return state
}


