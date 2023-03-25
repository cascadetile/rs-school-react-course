interface IInputValues {
  name: string
  date: string
  country: string
  agree: boolean
  gender: string
  file: string
}

interface IFormValidatorState {
  errorName: string
  errorDate: string
  errorCountry: string
  errorAgree: string
  errorGender: string
  errorFile: string
}