import React from 'react';
import './style.css';

interface IState {
  cards: Card[]
  errorName: string
  errorDate: string
  errorSelect: string
  errorCheckbox: string
  errorGender: string
  errorFile: string
}

interface Card {
  name: string
  date: string
  country: string
  agree: boolean
  gender: string
  file: string
}

export class Form extends React.Component<{}, IState> {
  name: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  select: React.RefObject<HTMLSelectElement>;
  checkbox: React.RefObject<HTMLInputElement>;
  male: React.RefObject<HTMLInputElement>;
  female: React.RefObject<HTMLInputElement>;
  file: React.RefObject<HTMLInputElement>;
  constructor(props: {}) {
    super(props);
    this.name = React.createRef();
    this.date = React.createRef();
    this.select = React.createRef();
    this.checkbox = React.createRef();
    this.male = React.createRef();
    this.female = React.createRef();
    this.file = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      cards: [],
      errorName: '',
      errorDate: '',
      errorSelect: '',
      errorCheckbox: '',
      errorGender: '',
      errorFile: '',
    }
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
    if (this.name.current) {
      if (!this.name.current.value) {
        newState.errorName = 'Name should not be empty';
        valid = false;
      } else if (/^[a-z]/.test(this.name.current.value)) {
        newState.errorName = 'Name should start from uppercase';
        valid = false;
      }
    }
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
          name: this.name.current!.value,
          date: this.date.current!.value,
          country: this.select.current!.value,
          agree: this.checkbox.current!.checked,
          gender: this.male.current!.checked ? 'Male' : 'Female',
          file: this.file.current!.files![0].name
        }
      ];
      this.name.current!.value = '';
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
          <input ref={this.name} type="text" />
          {
            this.state.errorName && <p>{this.state.errorName}</p>
          }
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