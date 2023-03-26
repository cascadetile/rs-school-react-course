import React from 'react';
import { Card } from '../../components/Card';
import { CardGroup } from '../../components/CardGroup';
import { Searchbar } from '../../components/Searchbar';
import { NavMenu } from '../../components/NavMenu';

export class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="home">
        <div>Home</div>
        <NavMenu />
        <Searchbar />
        <CardGroup>
          <Card>
            <div className="card__img-wrapper">
              <img className="card__img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzKo_jgr6H7jOK1P2iDP2Vr0D_iDDzSqglpcSbUvY1RQSL5t58_E2Z3uJY8-ZZlnKaX55jWiYR-EybweoqHkrvRNuFuvafmAG_deshyVK3djzqK1fT5kTrXy_pbvu0JLgmUWEC2i4Uhs0QOXg1MeZJNYSMURTjoKGHlrtqaq303aCrBgLypDbGuV6THA/s531/20230202_005135%20(1).png" alt="" />
            </div>
            <h3 className="card__title">Can you believe it?</h3>
            <p className="card__description">We do not have a jacuzzi</p>
          </Card>
          <Card>
            <div className="card__img-wrapper">
              <img className="card__img" src="https://pyxis.nymag.com/v1/imgs/4d0/2e9/84cd197dc18e57671762f42af969127c1a-30-sorry-dog.rvertical.w330.jpg" alt="" />
            </div>
            <h3 className="card__title">What is 9 plus 10?</h3>
            <p className="card__description">Twenty one</p>
          </Card>
          <Card>
            <div className="card__img-wrapper">
              <img className="card__img" src="https://gcdn.thunderstore.io/live/repository/icons/Capt_Diqhedd-GoFuckYourself-1.0.1.png.128x128_q95.png" alt="" />
            </div>
            <h3 className="card__title">STOP</h3>
            <p className="card__description">I am with a science team</p>
          </Card>
        </CardGroup>
      </div>
    );
  }
}

export default Home;