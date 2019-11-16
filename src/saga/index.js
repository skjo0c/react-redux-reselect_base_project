import { all, fork } from "redux-saga/effects";
import dashboardSaga from "../containers/dashboard/saga";

function* rootSaga() {
  yield all([fork(dashboardSaga)]);
}

export default rootSaga;
