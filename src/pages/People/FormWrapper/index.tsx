import React from 'react';
import { FormPeople } from '../Form';
import { IFormWrapperState, IInputValues } from '../interfaces';
import { FormValidator } from './FormValidator';

interface IProps {
  handleStateUpdate: (newState: IInputValues) => void
}

export class FormWrapper extends React.Component<IProps, IFormWrapperState> {
  form: React.RefObject<HTMLFormElement>;
  name: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
  agree: React.RefObject<HTMLInputElement>;
  male: React.RefObject<HTMLInputElement>;
  female: React.RefObject<HTMLInputElement>;
  file: React.RefObject<HTMLInputElement>;
  fieldset: React.RefObject<HTMLFieldSetElement>;
  validator: FormValidator;
  constructor(props: IProps) {
    super(props);
    this.form = React.createRef();
    this.name = React.createRef();
    this.date = React.createRef();
    this.country = React.createRef();
    this.agree = React.createRef();
    this.male = React.createRef();
    this.female = React.createRef();
    this.file = React.createRef();
    this.fieldset = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validator = new FormValidator();
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
    if (this.name.current && this.date.current &&
      this.country.current && this.agree.current &&
      this.male.current && this.female.current &&
      this.file.current && this.fieldset.current) {
      const { errors, isValid } = this.validator.validate({
        name: this.name.current.value,
        date: this.date.current.value,
        country: this.country.current.value,
        agree: this.agree.current.checked,
        male: this.male.current.checked,
        female: this.female.current.checked,
        file: this.file.current.files,
      });
      if (isValid) {
        this.props.handleStateUpdate({
          name: this.name.current.value,
          date: this.date.current.value,
          country: this.country.current.value,
          agree: this.agree.current.checked,
          gender: this.getGenderValue(),
          file: this.file.current.files?.length ? this.file.current.files[0] : '',
        });
        this.fieldset.current.disabled = true;
        setTimeout(() => {
          if (this.fieldset.current) {
            this.fieldset.current.disabled = false;
          }
          this.form.current?.reset();
        }, 3000);
      }
      this.setState(errors);
    }
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
          formRef={this.form}
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

export default FormWrapper;