import React from 'react';
import { FormValidator } from './FormValidator';
import './style.css';

interface IState {
  cards: IInputValues[]
}

export class People extends React.Component<Record<string, never>, IState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.handleStateUpdate = this.handleStateUpdate.bind(this);
    this.state = {
      cards: [],
    }
  }

  handleStateUpdate(newCard: IInputValues) {
    this.setState({
      cards: [
        ...this.state.cards,
        {...newCard}
      ]
    })
  }

  render(): React.ReactNode {
    return (
      <div>
        <div>People</div>
        <FormValidator 
          handleStateUpdate={this.handleStateUpdate}
        />
      </div>
    );
  }
}

export default People;