interface IFormValidator {
  name: string
  date: string
  country: string
  agree: boolean
  male: boolean
  female: boolean
  file: FileList | null
}

export class FormValidator {
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

export default FormValidator;