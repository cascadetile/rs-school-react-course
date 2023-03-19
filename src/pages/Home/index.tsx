import React from 'react';
import { Card } from '../../components/Card';
import { CardGroup } from '../../components/CardGroup';
import { Searchbar } from '../../components/Searchbar';
import { NavMenu } from '../../components/NavMenu';

export class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="home">
        <NavMenu />
        <Searchbar />
        <CardGroup>
          <Card title='Can you believe it?' description='We do not have a jacuzzi' imgUrl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzKo_jgr6H7jOK1P2iDP2Vr0D_iDDzSqglpcSbUvY1RQSL5t58_E2Z3uJY8-ZZlnKaX55jWiYR-EybweoqHkrvRNuFuvafmAG_deshyVK3djzqK1fT5kTrXy_pbvu0JLgmUWEC2i4Uhs0QOXg1MeZJNYSMURTjoKGHlrtqaq303aCrBgLypDbGuV6THA/s531/20230202_005135%20(1).png" />
          <Card title='What is 9 plus 10?' description='Twenty one' imgUrl="https://pyxis.nymag.com/v1/imgs/4d0/2e9/84cd197dc18e57671762f42af969127c1a-30-sorry-dog.rvertical.w330.jpg" />
          <Card title='STOP' description='I am with a science team' imgUrl="https://gcdn.thunderstore.io/live/repository/icons/Capt_Diqhedd-GoFuckYourself-1.0.1.png.128x128_q95.png" />
        </CardGroup>
      </div>
    );
  }
}

export default Home;