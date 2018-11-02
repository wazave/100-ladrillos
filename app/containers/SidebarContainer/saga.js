import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router/immutable';

import { NAVIGATE } from './constants';

function* navigate({ payload }) {
  yield put(push(payload.path));
}

export default function* sidebarContainerSaga() {
  yield takeLatest(NAVIGATE, navigate);
}
