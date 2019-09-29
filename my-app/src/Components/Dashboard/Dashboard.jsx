import React, { Component } from 'react';
import shortid from 'shortid';
import { toast } from 'react-toastify';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import 'react-toastify/dist/ReactToastify.css';

class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
    deposit: 0,
    withdrawal: 0,
    value: '',
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      value,
    });
  };

  handleClick = ({ target }) => {
    const { name } = target;
    const date = new Date().toLocaleString();
    const { balance, value } = this.state;

    const transactions = {
      id: shortid.generate(),
      type: name,
      amount: value,
      date,
    };

    if (name === 'withdrawal' && value > balance) {
      toast.error('На счету недостаточно средств для проведения операции!');
      this.reset();
    } else if (value <= 0 || value === '') {
      toast.warn('Введите сумму для проведения операции!');
      this.reset();
    } else {
      this.setState(prev => {
        prev.transactions.push(transactions);
      }, this.operationsButtons(name, value));
      this.reset();
    }
  };

  operationsButtons = (name, value) => {
    if (name === 'deposit') {
      this.setState(prev => ({
        deposit: prev.deposit + Number(value),
        balance: prev.balance + Number(value),
      }));
    } else if (name === 'withdrawal') {
      this.setState(prev => ({
        withdrawal: Number(prev.withdrawal + value),
        balance: Number(prev.balance - value),
      }));
    }
  };

  reset = () => {
    this.setState({
      value: '',
    });
  };

  render() {
    const { balance, withdrawal, deposit, transactions, value } = this.state;
    return (
      <div className="dashboard">
        <Controls
          value={value}
          handleChange={this.handleChange}
          onChange={this.handleChange}
          handleClick={this.handleClick}
        />
        <Balance balance={balance} withdrawal={withdrawal} deposit={deposit} />
        <TransactionHistory transactions={transactions} />
      </div>
    );
  }
}

export default Dashboard;
