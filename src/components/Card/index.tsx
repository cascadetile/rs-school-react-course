import React, { ReactNode } from 'react';
import './style.css';

interface IProps {
  children: ReactNode
}

export class Card extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div className="card">
        {this.props.children}
      </div>
    );
  }
}

export default Card;