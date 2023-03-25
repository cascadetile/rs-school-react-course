import React from 'react';

interface INewState {
  agree: boolean
  errorAgree: string
}

interface IProps {
  handleSetState: (obj: INewState) => void
  showError: boolean
}

interface IState {
  errorMsg: string
}

export class CheckboxInput extends React.Component<IProps, IState> {
  checkbox: React.RefObject<HTMLInputElement>;
  constructor(props: IProps) {
    super(props);
    this.checkbox = React.createRef();
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      errorMsg: '',
    };
  }

  handleInput() {
    if (this.checkbox.current) {
      const newState = {
        errorMsg: '',
        agree: this.checkbox.current.checked,
      };
      if (!this.checkbox.current.checked) {
        newState.errorMsg = 'You must accept the agreement';
      }
      this.setState({
        ...newState,
      });
      this.props.handleSetState({
        errorAgree: newState.errorMsg,
        agree: newState.agree,
      });
    }
  }

  render(): React.ReactNode {
    return (
      <>
        <input ref={this.checkbox} onInput={this.handleInput} type="checkbox" />
        {
          (this.props.showError && this.state.errorMsg) && <p>{this.state.errorMsg}</p>
        }
      </>
    );
  }
}

export default CheckboxInput;