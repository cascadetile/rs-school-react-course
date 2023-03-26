import React from 'react';
import { IFormWrapperState } from '../interfaces';

// TODO: change to IProps
interface IFormProps {
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void
  formRef: React.RefObject<HTMLFormElement>
  nameRef: React.RefObject<HTMLInputElement>
  dateRef: React.RefObject<HTMLInputElement>
  countryRef: React.RefObject<HTMLSelectElement>
  agreeRef: React.RefObject<HTMLInputElement>
  maleRef: React.RefObject<HTMLInputElement>
  femaleRef: React.RefObject<HTMLInputElement>
  fileRef: React.RefObject<HTMLInputElement>
  fieldsetRef: React.RefObject<HTMLFieldSetElement>
  errors: IFormWrapperState
}

export class FormPeople extends React.Component<IFormProps, Record<string, never>> {
  constructor(props: IFormProps) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <>
        <form ref={this.props.formRef} onSubmit={this.props.handleSubmit} className="form">
          <fieldset ref={this.props.fieldsetRef}>
            <label className="form__label" htmlFor="name">
              Name:
            </label>
            <input className="form__name" id="name" ref={this.props.nameRef} type="text" placeholder="Name" />
            {
              this.props.errors.errorName && <p className="form__error">{this.props.errors.errorName}</p>
            }
            <label className="form__label" htmlFor="date">Birthday:</label>
            <input className="form__birthday" id="date" ref={this.props.dateRef} type="date" />
            {
              this.props.errors.errorDate && <p className="form__error">{this.props.errors.errorDate}</p>
            }
            <label className="form__label" htmlFor="country">Select your country:</label>
            <select className="form__country" id="country" ref={this.props.countryRef} defaultValue="default">
              <option className="form__country-option" disabled value="default">Select your country</option>
              <option className="form__country-option" value="BY">BY</option>
              <option className="form__country-option" value="RU">RU</option>
              <option className="form__country-option" value="KZ">KZ</option>
            </select>
            {
              this.props.errors.errorCountry && <p className="form__error">{this.props.errors.errorCountry}</p>
            }
            <label className="form__label">
              <input className="form__agree" ref={this.props.agreeRef} type="checkbox" />
              I agree with agreement
            </label>
            {
              this.props.errors.errorAgree && <p className="form__error">{this.props.errors.errorAgree}</p>
            }
            <div>
              Choose your gender:
              <label className="form__label">
                <input className="form__gender" ref={this.props.maleRef} name="sex" type="radio" value="Male" />
                Male
              </label>
              <label className="form__label">
                <input className="form__gender" ref={this.props.femaleRef} name="sex" type="radio" value="Female" />
                Female
              </label>
            </div>
            {
              this.props.errors.errorGender && <p className="form__error">{this.props.errors.errorGender}</p>
            }
            <label className="form__label" htmlFor="pfp">Choose your profile picture:</label>
            <input className="form__pfp" id="pfp" ref={this.props.fileRef} type="file" />
            {
              this.props.errors.errorFile && <p className="form__error">{this.props.errors.errorFile}</p>
            } 
            <input className="form__submit" type="submit" value="Send" />
          </fieldset>
        </form>
      </>
    )
  }
}

export default FormPeople;