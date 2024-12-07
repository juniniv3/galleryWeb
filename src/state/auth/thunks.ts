import {singIn} from '../../Firebase/Providers';
import {Dispatch} from 'redux';
import {loading, login, logout} from './';

export const loginThunk = (user: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(loading());
    const response = await singIn(user, password);
    if (response.ok) {
      dispatch(login(response));
    } else {
      dispatch(logout(response));
    }
  };
};
