import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password, permission_level } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
      permission_level,
    });

    const { token, user } = response.data;

    if (!user.permission_level === 'admin') {
      toast.error('Usuário não tem nível de administrador.');

      return;
    }

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha ao tentar fazer o login. Verifique seus dados.');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
