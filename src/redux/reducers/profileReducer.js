import * as actions from '../actions/actionType'

const initialState = {
  profile: []
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_PROFILE:
      return {
        ...state,
        isLoading: true
      };
    case actions.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        isLoading: false

      };
    case actions.GET_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasErrors: action.error
      };

    default:
      return state;
  }
}
export default profileReducer
