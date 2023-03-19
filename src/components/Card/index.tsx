import React from 'react';
import './style.css';

interface IProps {
  imgUrl: string
  title: string
  description: string
}

export class Card extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div className="card">
        <div className="card__img-wrapper">
          <img className="card__img" src={this.props.imgUrl} alt="" />
        </div>
        <h3 className="card__title">{this.props.title}</h3>
        <p className="card__description">{this.props.description}</p>
      </div>
    );
  }
}

export default Card;