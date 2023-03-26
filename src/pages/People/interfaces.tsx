export interface IInputValues {
  name: string
  date: string
  country: string
  agree: boolean
  gender: string
  file: File | string
}

export interface IFormValidatorState {
  errorName: string
  errorDate: string
  errorCountry: string
  errorAgree: string
  errorGender: string
  errorFile: string
}