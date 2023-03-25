import React from 'react';

interface INewState {
  select: string
  errorSelect: string
}

interface IProps {
  handleSetState: (obj: INewState) => void
  showError: boolean
}

interface IState {
  errorMsg: string
}

export class Select extends React.Component<IProps, IState> {
  select: React.RefObject<HTMLSelectElement>;
  constructor(props: IProps) {
    super(props);
    this.select = React.createRef();
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      errorMsg: '',
    };
  }

  handleInput() {
    if (this.select.current) {
      const newState = {
        errorMsg: '',
        select: this.select.current.value,
      };
      if (this.select.current.value === 'default') {
        newState.errorMsg = 'You did not select your country';
      }
      this.setState({
        ...newState,
      });
      this.props.handleSetState({
        errorSelect: newState.errorMsg,
        select: newState.select,
      });
    }
  }

  render(): React.ReactNode {
    return (
      <>
        <select ref={this.select} onBlur={this.handleInput} defaultValue="default">
          <option disabled value="default">Select your country</option>
          <option value="BY">BY</option>
          <option value="RU">RU</option>
          <option value="KZ">KZ</option>
        </select>
        {
          (this.props.showError && this.state.errorMsg) && <p>{this.state.errorMsg}</p>
        }
      </>
    );
  }
}

export default Select;