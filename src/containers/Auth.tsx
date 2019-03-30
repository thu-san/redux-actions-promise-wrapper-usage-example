import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../reducers';
import { loginAction, logoutAction } from '../reducers/auth';

interface IState {
  account: string;
  loading: boolean;
}
type IProp = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
export class Dash extends PureComponent<IProp, IState> {
  state: IState = {
    account: '',
    loading: false
  };

  handleLogin = async () => {
    const { loginAction } = this.props;
    const { account } = this.state;
    this.setState({ loading: true });
    const { promise } = loginAction({ account });
    const result = await promise;
    alert(`You are now logged in as ${result}`);
    this.setState({ loading: false });
  };

  handleLogout = async () => {
    const { session, logoutAction } = this.props;
    if (session) {
      logoutAction({ session });
    }
  };

  render() {
    const { session, account: authAccount } = this.props;
    const { account, loading } = this.state;

    const loggedIn = !!session;

    return (
      <div
        style={{
          display: 'flex',
          height: 500,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div>
          <p>Status: {loggedIn ? 'Logged In' : 'Logged Out'}</p>
          <p>Session: {session}</p>
          <p>Email: {authAccount}</p>
          {loading ? (
            '...loading'
          ) : loggedIn ? (
            <button onClick={this.handleLogout}>Logout</button>
          ) : (
            <>
              <p>
                <input
                  type="text"
                  placeholder="account"
                  value={account}
                  onChange={({ target: { value } }) =>
                    this.setState({ account: value })
                  }
                />
              </p>
              <button onClick={this.handleLogin}>Login</button>
            </>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { account, session } }: AppState) => ({
  account,
  session
});

const mapDispatchToProps = {
  loginAction,
  logoutAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dash);
