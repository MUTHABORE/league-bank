import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {RATES} from '../util/const';

export const withConverter = (Component) => {
  class WithConverter extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        firstValue: {
          value: 0,
          rate: RATES.RUB,
        },
        secoundValue: {
          value: 0,
          rate: RATES.USD,
        },
      }
      this._valueChangeHandler = this._valueChangeHandler.bind(this);
    }

    
    _valueChangeHandler(evt) {
      const {name, value} = evt.target;
      this.state(name.value = value);
    }


    _currencyChangeHandler() {
    }

    _dateChangeHandler(evt) {
      evt.preventDefault();
    }

    render() {
      return (
        <Component
          {...this.props}
          valueChangeHandler={this._valueChangeHandler}
        />
      );
    }
  }
  return connect()(WithConverter);
};
