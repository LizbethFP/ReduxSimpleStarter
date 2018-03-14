import React from 'react';
import Chick from './assets/images/chick.jpg';

const PicTitle = ({juan}) => (
  <div>
    <h3>Chick</h3>
    <img src={Chick} alt={juan}/>
  </div>
)

export default PicTitle;