import React from 'react';

interface INewState {
  name?: string
  errorName?: string
}

interface IProps {
  handleSetState: (obj: INewState) => void
  showError: boolean
}

interface IState {
  errorMsg: string
}

export class NameInput extends React.Component<IProps, IState> {
  name: React.RefObject<HTMLInputElement>;
  constructor(props: IProps) {
    super(props);
    this.name = React.createRef();
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      errorMsg: '',
    };
  }

  handleInput() {
    if (this.name.current) {
      const newState = {
        errorMsg: '',
        name: this.name.current.value,
      };
      if (!this.name.current.value) {
        newState.errorMsg = 'Name should not be empty';
      } else if (/^[a-zа-я]/.test(this.name.current.value)) {
        newState.errorMsg = 'Name should start from uppercase';
      }
      this.setState({
        ...newState,
      });
      this.props.handleSetState({
        errorName: newState.errorMsg,
        name: newState.name,
      });
    }
  }

  render(): React.ReactNode {
    return (
      <>
        <input ref={this.name} onInput={this.handleInput} type="text" />
        {
          (this.props.showError && this.state.errorMsg) && <p>{this.state.errorMsg}</p>
        }
      </>
    );
  }
}

export default NameInput;