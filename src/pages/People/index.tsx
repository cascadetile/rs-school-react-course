import { Card } from '../../components/Card';
import React from 'react';
import { FormWrapper } from './FormValidator';
import './style.css';
import { CardGroup } from '../../components/CardGroup';
import { IInputValues } from './interfaces';
import Notification from './Notification';

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
      <div className="people">
        <div>People</div>
        <FormWrapper
          handleStateUpdate={this.handleStateUpdate}
        />
        <Notification
          cards={this.state.cards}
        />
        <CardGroup>
          {
            this.state.cards.map((card, index) => {
              return (
                <Card key={index}>
                  <div className="card__img-wrapper">
                    <img className="card__img" src={URL.createObjectURL(card.file as File)} alt="" />
                  </div>
                  <h3 className="card__title">Name: {card.name}</h3>
                  <p className="card__description">Birthday: {card.date}</p>
                  <p className="card__description">Country: {card.country}</p>
                  <p className="card__description">Agreed: {card.agree && 'Yes'}</p>
                  <p className="card__description">Gender: {card.gender}</p>
                </Card>
              )
            })
          }
        </CardGroup>
      </div>
    );
  }
}

export default People;