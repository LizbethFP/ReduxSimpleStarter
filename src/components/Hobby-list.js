import React from 'react';
import HobbyListUl from './Hobby-list-ul';
import HobbyListLi from './Hobby-list-li';
import PicTitle from './pic-title';
import { prototype } from 'events';

const HobbyList = ({pedro}) => (
  <section>
    <PicTitle juan="array"/>
    <HobbyListUl/>
  </section>
)

HobbyList.Prototype = {pedro: prototype.string.IsRequired }
export default HobbyList;