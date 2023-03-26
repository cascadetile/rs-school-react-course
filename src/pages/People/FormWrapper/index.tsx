import React from 'react';
import { FormPeople } from '../Form';
import { IFormWrapperState, IInputValues } from '../interfaces';

interface IProps {
  handleStateUpdate: (newState: IInputValues) => void
}

export class FormWrapper extends React.Component<IProps, IFormWrapperState> {
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

interface IFormValidator {
  name: string
  date: string
  country: string
  agree: boolean
  male: boolean
  female: boolean
  file: FileList | null
}

class FormValidator {
  validate(data: IFormValidator) {
    const errors = {
      errorName: '',
      errorDate: '',
      errorCountry: '',
      errorAgree: '',
      errorGender: '',
      errorFile: '',
    };
    let isValid = true;

    if (!data.name) {
      errors.errorName = 'Name should not be empty';
      isValid = false;
    } else if (/^[a-zа-я]/.test(data.name)) {
      errors.errorName = 'Name should start from uppercase';
      isValid = false;
    }
    if (!data.date) {
      errors.errorDate = 'Date should not be empty';
      isValid = false;
    }
    if (data.country === 'default') {
      errors.errorCountry = 'You did not select your country';
      isValid = false;
    }
    if (!data.agree) {
      errors.errorAgree = 'You must accept the agreement';
      isValid = false;
    }
    if (!data.male && !data.female) {
      errors.errorGender = 'You must choose your gender';
      isValid = false;
    }
    if (!data.file?.length) {
      errors.errorFile = 'You must select a file';
      isValid = false;
    }
    return { errors, isValid };
  }
}

export default FormWrapper;