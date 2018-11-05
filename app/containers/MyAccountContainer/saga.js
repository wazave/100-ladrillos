import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { ACCOUNT_DATA_REQUEST } from './constants';
import { accountDataFailure, accountDataSuccess } from './actions';

export function* fetchAccountData() {
  // const requestURL = `${process.env.API_URL}/users/${userId}/my-account`;
  const requestURL =
    'https://fakehundredbricks-hbhvbnpqnm.now.sh/users/98ef3f8c-e3e4-43c3-bbb2-e734c54400fd/my-account';
  try {
    const result = yield call(request, requestURL, {
      mode: 'cors',
    });
    yield put(accountDataSuccess(result));
  } catch (error) {
    yield put(accountDataFailure());
  }
}

export default function* myAccountContainerSaga() {
  yield takeLatest(ACCOUNT_DATA_REQUEST, fetchAccountData);
}
