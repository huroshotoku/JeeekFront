import { Reducer } from 'redux'
import { FollowsAction, FollowsActionType } from '../actions/follows'

export interface FollowState {
  followings: UserTiny[]
  followers: UserTiny[]
}

export interface UserTiny {
  uid: string
  name: string
  photoUrl: string
}

const followReducer: Reducer<FollowState, FollowsAction> = (
  state: FollowState = null,
  action: FollowsAction,
): FollowState => {
  switch (action.type) {
    case FollowsActionType.GET_FOLLOWS_START: {
      return {
        ...state,
        followings: [],
        followers: [],
      }
    }
    case FollowsActionType.GET_FOLLOWS_SUCCEED: {
      return {
        ...state,
        followings: action.payload.result.followings,
        followers: action.payload.result.followers,
      }
    }
    case FollowsActionType.GET_FOLLOWS_FAIL: {
      // TODO: error処理
      return state
    }
    default: {
      return {
        ...state,
      }
    }
  }
}

export default followReducer
