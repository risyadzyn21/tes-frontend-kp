import { getProfileAPI } from "../../services/api";
import {
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
} from './actionType'


export const getProfile = () => ({
  type: GET_PROFILE,
});

export const getProfileSuccess = (profile) => {
  return {
    type: GET_PROFILE_SUCCESS,
    payload: profile,
  };
};

export const getProfileFailure = (error) => {
  return {
    type: GET_PROFILE_FAILURE,
    payload: error,
  };
};

export const getProfileAsync = () => {
  return async (dispatch) => {
    dispatch(getProfile());
    try {
      const res = await getProfileAPI();

      dispatch(getProfileSuccess(res.data.data));
    } catch (error) {
      dispatch(getProfileFailure(error));
    }
  };
};