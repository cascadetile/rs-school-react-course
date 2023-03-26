import React from 'react';
import { IInputValues } from '../interfaces';

interface IProps {
  cards: IInputValues[]
}

interface IState {
  hide: boolean
}

export class Notification extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hide: false,
    }
  }
  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
    if (JSON.stringify(prevProps.cards) !== JSON.stringify(this.props.cards)) {
      this.setState({hide: false});
      setTimeout(() => {
        this.setState({hide: true});
      }, 3000);
    }
  }
  render(): React.ReactNode {
    return (
      <>
        {(!this.state.hide && this.props.cards.length > 0) && `Card ${this.props.cards[this.props.cards.length - 1].name} was created`}
      </>
    )
  }
}

export default Notification;