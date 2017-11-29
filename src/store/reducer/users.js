import * as Types from '../actionTypes'

const initialState={
  userList:[],
  user:{},
}
export default function usersReducer(state=initialState,action) {
  switch (action.type){
    case Types.GET_USERS:
      return {...state,userList:[...action.userList]};
    case Types.GET_ONE_USER:
      let id=action.userId;
      let users=action.data;
      let user=state.userList.find(item=>item.id==id);
      return {...state,user}
    case Types.ADD_USER:
      return {...state,userList:[...state.userList,action.user]};
    case Types.DELETE_USER:
      let userId=action.userId;
      let newUserList=state.userList.filter(item=>item.id!==userId);
      return {...state,userList:[...newUserList]}
    case Types.UPDATE_USER:
      return {...state,user:action.user}
  }
  return state;
}