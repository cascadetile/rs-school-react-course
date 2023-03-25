import React from 'react';

interface INewState {
  date?: string
  errorDate?: string
}

interface IProps {
  handleSetState: (obj: INewState) => void
  showError: boolean
}

interface IState {
  errorMsg: string
}

export class DateInput extends React.Component<IProps, IState> {
  date: React.RefObject<HTMLInputElement>;
  constructor(props: IProps) {
    super(props);
    this.date = React.createRef();
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      errorMsg: '',
    };
  }

  handleInput() {
    if (this.date.current) {
      const newState = {
        errorMsg: '',
        date: this.date.current.value,
      };
      if (!this.date.current.value) {
        newState.errorMsg = 'Date should not be empty';
      }
      this.setState({
        ...newState,
      });
      this.props.handleSetState({
        errorDate: newState.errorMsg,
        date: newState.date,
      });
    }
  }

  render(): React.ReactNode {
    return (
      <>
        <input ref={this.date} onInput={this.handleInput} type="date" />
        {
          (this.props.showError && this.state.errorMsg) && <p>{this.state.errorMsg}</p>
        }
      </>
    );
  }
}

export default DateInput;