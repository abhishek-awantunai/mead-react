import React from 'react';
import Input from './components/Input';

interface AppState {
  account: {
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    email: string;
  }
}

interface AppProps {}

class App extends React.Component<AppProps, AppState> {
  state = {
    account: { 
      username: '', 
      password: '',
      first_name: '',
      last_name: '',
      email: ''
    },
    error: {}
  };

  handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('submitted', this.state.account);
  }

  handleInputChange = (e: any) => {
    let account:any = {...this.state.account};
    account[e.target.name] = e.target.value;
    this.setState({
      account: { ...account }
    });
  }

  render() { 
    const { account } = this.state;
    return (
      <div className="container-fluid">
        <h1 className="text-center mt-5">Simple Form App</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <Input label='Username' name='username' value={account.username} type='text' onChange={(e :any) => this.handleInputChange(e)} />
          <Input label='First Name' name='first_name' value={account.first_name} type='text' onChange={(e :any) => this.handleInputChange(e)} />
          <Input label='Last Name' name='last_name' value={account.last_name} type='text' onChange={(e :any) => this.handleInputChange(e)} />
          <Input label='Password' name='password' value={account.password} type='password' onChange={(e :any) => this.handleInputChange(e)} />
          <Input label='Email' name='email' value={account.email} type='email' onChange={(e :any) => this.handleInputChange(e)} />
          <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;