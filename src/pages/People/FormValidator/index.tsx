import React from 'react';
import { FormPeople } from '../Form';
import { IFormValidatorState, IInputValues } from '../interfaces';

interface IProps {
  handleStateUpdate: (newState: IInputValues) => void
}

export class FormValidator extends React.Component<IProps, IFormValidatorState> {
  name: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
  agree: React.RefObject<HTMLInputElement>;
  male: React.RefObject<HTMLInputElement>;
  female: React.RefObject<HTMLInputElement>;
  file: React.RefObject<HTMLInputElement>;
  fieldset: React.RefObject<HTMLFieldSetElement>;
  constructor(props: IProps) {
    super(props);
    this.name = React.createRef();
    this.date = React.createRef();
    this.country = React.createRef();
    this.agree = React.createRef();
    this.male = React.createRef();
    this.female = React.createRef();
    this.file = React.createRef();
    this.fieldset = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      errorName: '',
      errorDate: '',
      errorCountry: '',
      errorAgree: '',
      errorGender: '',
      errorFile: '',
    }
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newState = {
      errorName: '',
      errorDate: '',
      errorCountry: '',
      errorAgree: '',
      errorGender: '',
      errorFile: '',
    };
    if (this.name.current && this.date.current &&
      this.country.current && this.agree.current &&
      this.male.current && this.female.current &&
      this.file.current && this.fieldset.current) {
      let valid = true;
      if (!this.name.current.value) {
        newState.errorName = 'Name should not be empty';
        valid = false;
      } else if (/^[a-zа-я]/.test(this.name.current.value)) {
        newState.errorName = 'Name should start from uppercase';
        valid = false;
      }
      if (!this.date.current.value) {
        newState.errorDate = 'Date should not be empty';
        valid = false;
      }
      if (this.country.current.value === 'default') {
        newState.errorCountry = 'You did not select your country';
        valid = false;
      }
      if (!this.agree.current.checked) {
        newState.errorAgree = 'You must accept the agreement';
        valid = false;
      }
      if (!this.male.current.checked && !this.female.current.checked) {
        newState.errorGender = 'You must choose your gender';
        valid = false;
      }
      if (!this.file.current.files?.length) {
        newState.errorFile = 'You must select a file';
        valid = false;
      }
      if (valid) {
        this.props.handleStateUpdate({
          name: this.name.current.value ?? '',
          date: this.date.current.value ?? '',
          country: this.country.current.value !== 'default' ? this.country.current.value : '',
          agree: this.agree.current.checked ?? false,
          gender: this.getGenderValue(),
          file: this.file.current.files?.length ? this.file.current.files[0] : '',
        });
        this.fieldset.current.disabled = true;
        setTimeout(() => {
          if (this.fieldset.current) {
            this.fieldset.current.disabled = false;
          }
          if (this.name.current) {
            this.name.current.value = '';
          }
          if (this.date.current) {
            this.date.current.value = '';
          }
          if (this.country.current) {
            this.country.current.value = 'default';
          }
          if (this.agree.current) {
            this.agree.current.checked = false;
          }
          if (this.male.current) {
            this.male.current.checked = false;
          }
          if (this.female.current) {
            this.female.current.checked = false;
          }
          if (this.file.current) {
            this.file.current.value = '';
          }
        }, 3000);
      }
    }
    this.setState(newState);
  }

  getGenderValue() {
    if (this.male.current && this.female.current) {
      if (this.male.current.checked) {
        return 'Male';
      }
      if (this.female.current.checked) {
        return 'Female';
      }
    }
    return '';
  }

  render(): React.ReactNode {
    return (
      <>
        <FormPeople
          handleSubmit={this.handleSubmit}
          nameRef={this.name}
          dateRef={this.date}
          countryRef={this.country}
          agreeRef={this.agree}
          maleRef={this.male}
          femaleRef={this.female}
          fileRef={this.file}
          fieldsetRef={this.fieldset}
          errors={this.state}
        />
      </>
    )
  }
}

export default FormValidator;