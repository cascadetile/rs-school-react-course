import React from 'react';
import { IFormValidatorState } from '../interfaces';

interface IFormProps {
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void
  nameRef: React.RefObject<HTMLInputElement>
  dateRef: React.RefObject<HTMLInputElement>
  countryRef: React.RefObject<HTMLSelectElement>
  agreeRef: React.RefObject<HTMLInputElement>
  maleRef: React.RefObject<HTMLInputElement>
  femaleRef: React.RefObject<HTMLInputElement>
  fileRef: React.RefObject<HTMLInputElement>
  errors: IFormValidatorState
}

export class FormPeople extends React.Component<IFormProps, Record<string, never>> {
  constructor(props: IFormProps) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <>
        <form onSubmit={this.props.handleSubmit} className="form">
          <label htmlFor="name">
            Name:
          </label>
          <input id="name" ref={this.props.nameRef} type="text" placeholder="Name" />
          {
            this.props.errors.errorName && <p>{this.props.errors.errorName}</p>
          }
          <label htmlFor="date">Birthday:</label>
          <input id="date" ref={this.props.dateRef} type="date" />
          {
            this.props.errors.errorDate && <p>{this.props.errors.errorDate}</p>
          }
          <label htmlFor="country">Select your country:</label>
          <select id="country" ref={this.props.countryRef} defaultValue="default">
            <option disabled value="default">Select your country</option>
            <option value="BY">BY</option>
            <option value="RU">RU</option>
            <option value="KZ">KZ</option>
          </select>
          {
            this.props.errors.errorCountry && <p>{this.props.errors.errorCountry}</p>
          }
          <label>
            <input ref={this.props.agreeRef} type="checkbox" />
            I agree with agreement
          </label>
          {
            this.props.errors.errorAgree && <p>{this.props.errors.errorAgree}</p>
          }
          <div>
            Choose your gender:
            <label>
              <input ref={this.props.maleRef} name="sex" type="radio" value="Male" />
              Male
            </label>
            <label>
              <input ref={this.props.femaleRef} name="sex" type="radio" value="Female" />
              Female
            </label>
          </div>
          {
            this.props.errors.errorGender && <p>{this.props.errors.errorGender}</p>
          }
          <label htmlFor="pfp">Choose your profile picture:</label>
          <input id="pfp" ref={this.props.fileRef} type="file" />
          {
            this.props.errors.errorFile && <p>{this.props.errors.errorFile}</p>
          } 
          <input type="submit" value="Send" />
        </form>
      </>
    )
  }
}

export default FormPeople;