import { AnyAction, Reducer } from 'redux';
import { createAction, ExtractActions, put, reg } from 'redux-actions-promise-wrapper';
import { all, delay, takeLatest } from 'redux-saga/effects';

interface ILoginTriggerPayload {
  account: string;
}

export const loginAction = createAction('LOGIN/TRIGGER', 'LOGIN/SUCCESS')(
  handleLogin,
  function*(arg: { session: string; account: string }) {
    return undefined;
  }
);
export const logoutAction = createAction('LOGOUT/TRIGGER')<{
  session: string;
}>();

function* handleLogin({ account }: ILoginTriggerPayload) {
  yield delay(1000);
  const putLoginSuccess = put(
    loginAction.success({ session: new Date().toString(), account })
  );
  yield putLoginSuccess;
  return reg(account);
}

export function* authSaga() {
  yield all([takeLatest(loginAction.TRIGGER, loginAction.handleTrigger)]);
}
// =========================================================
// REDUCER
interface IAuth {
  account?: string;
  session?: string;
}

const INITIAL_STATE: IAuth = {};

type Actions = ExtractActions<{
  loginAction: typeof loginAction;
  logoutAction: typeof logoutAction;
}>;

const reducer: Reducer<IAuth, Actions> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case loginAction.SUCCESS: {
      const { account, session } = action.payload;
      return { ...state, account, session };
    }
    case logoutAction.TRIGGER: {
      const { session } = action.payload;
      console.log(`LOGOUT Reducer Session -  ${session}`);
      return {};
    }
    default:
      return state;
  }
};

export default reducer;
