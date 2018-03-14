import React, {Component} from 'react';

class HobbyListLi extends Component {
  constructor() {
    super();
    this.state = { hobbies: [
      {hobbieName: 'Ver televisión'},
      {hobbieName: 'Leer cómics'},
      {hobbieName: 'Salir con mi hermana'}
    ]
    }
  }
  render() {
    const array = this.state.hobbies.map((hobbie,index) => {
      return (
        <div>
          <li>
          <p>{hobbie.hobbieName}</p>
          </li>
        </div>
        )
    });

    return (
      <div>{array}</div>
    )
  }
}


export default HobbyListLi;

/* LULU */
// const espanol = [1,2,3];
// const ingles = ['welcome', 'us', 'they'];

// const NavBar = () => {
//   const list = ingles.map((el, index) => 
//   <a key={index}>{el}</a>
// )
// }