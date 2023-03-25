import React from 'react';
import { NameInput } from './NameInput';
import './style.css';

interface IState {
  showErrors: boolean
  cards: Card[]
  name: string
  errorName: string
  errorDate: string
  errorSelect: string
  errorCheckbox: string
  errorGender: string
  errorFile: string
}

interface Card {
  date: string
  country: string
  agree: boolean
  gender: string
  file: string
}

interface INewState {
  name?: string
  errorName?: string
}

export class Form extends React.Component<Record<string, never>, IState> {
  date: React.RefObject<HTMLInputElement>;
  select: React.RefObject<HTMLSelectElement>;
  checkbox: React.RefObject<HTMLInputElement>;
  male: React.RefObject<HTMLInputElement>;
  female: React.RefObject<HTMLInputElement>;
  file: React.RefObject<HTMLInputElement>;
  constructor(props: Record<string, never>) {
    super(props);
    this.date = React.createRef();
    this.select = React.createRef();
    this.checkbox = React.createRef();
    this.male = React.createRef();
    this.female = React.createRef();
    this.file = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSetState = this.handleSetState.bind(this);
    this.state = {
      showErrors: false,
      cards: [],
      name: '',
      errorName: '',
      errorDate: '',
      errorSelect: '',
      errorCheckbox: '',
      errorGender: '',
      errorFile: '',
    }
  }

  handleSetState(newState: INewState) {
    this.setState({
      ...this.state,
      ...newState
    });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newState = {
      ...this.state,
      errorName: '',
      errorDate: '',
      errorSelect: '',
      errorCheckbox: '',
      errorGender: '',
      errorFile: '',
    };
    let valid = true;
    if (this.date.current) {
      if (!this.date.current.value) {
        newState.errorDate = 'Date should not be empty';
        valid = false;
      }
    }
    if (this.select.current) {
      if (this.select.current.value === 'default') {
        newState.errorSelect = 'You did not select your country';
        valid = false;
      }
    }
    if (this.checkbox.current) {
      if (!this.checkbox.current.checked) {
        newState.errorCheckbox = 'You must accept the agreement';
        valid = false;
      }
    }
    if (this.male.current && this.female.current) {
      if (!this.male.current.checked && !this.female.current.checked) {
        newState.errorGender = 'You must choose your gender';
        valid = false;
      }
    }
    if (this.file.current) {  
      if (!this.file.current.files?.length) {
        newState.errorFile = 'You must select a file';
        valid = false;
      }
    }
    if (valid) {
      newState.cards = [
        ...newState.cards, 
        {
          date: this.date.current!.value,
          country: this.select.current!.value,
          agree: this.checkbox.current!.checked,
          gender: this.male.current!.checked ? 'Male' : 'Female',
          file: this.file.current!.files![0].name
        }
      ];
      this.date.current!.value = '';
      this.select.current!.value = 'default';
      this.checkbox.current!.checked = false;
      this.male.current!.checked = false;
      this.female.current!.checked = false;
      this.file.current!.value = '';
      console.log(newState.cards);
    }
    this.setState(newState);
  }

  render(): React.ReactNode {
    return (
      <div>
        <div>Form</div>
        <form onSubmit={this.handleSubmit} className="form">
          <NameInput
            showError={this.state.showErrors}
            handleSetState={this.handleSetState}
          />
          <input ref={this.date} type="date" />
          {
            this.state.errorDate && <p>{this.state.errorDate}</p>
          }
          <select ref={this.select} defaultValue="default">
            <option disabled value="default">Select your country</option>
            <option value="BY">BY</option>
            <option value="RU">RU</option>
            <option value="KZ">KZ</option>
          </select>
          {
            this.state.errorSelect && <p>{this.state.errorSelect}</p>
          }
          <input ref={this.checkbox} type="checkbox" />
          {
            this.state.errorCheckbox && <p>{this.state.errorCheckbox}</p>
          }
          <div>
            <label>
              <input ref={this.male} name="sex" type="radio" value="Male" />
              Male
            </label>
            <label>
              <input ref={this.female} name="sex" type="radio" value="Female" />
              Female
            </label>
          </div>
          {
            this.state.errorGender && <p>{this.state.errorGender}</p>
          } 
          <input ref={this.file} type="file" />
          {
            this.state.errorFile && <p>{this.state.errorFile}</p>
          } 
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default Form;