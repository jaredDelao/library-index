import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    this.method();

  }

  method() {
    

    let users = [];
    let products = [];

    const elem = 50000;

    const keyBy = (arr, key) => arr.reduce((acc, elem) => {
      acc[elem[key]] = elem;
      return acc;
    }, {})

    for (let i=0; i<elem; i++) {
      users.push({id: i, nombre: `nombre-${i}`});
    }

    for (let i=0; i<elem; i++) {
      products.push({
        id: i,
        nombre: `nombre-producto-${i}`,
        user_id: Math.floor(Math.random() * elem)
      })
    }

    console.time('seconds')

    const keyedBy = keyBy(users, 'id');
    // console.log('::', keyedBy);
    

    const mezclados = products.map(x => ({
      ...x,
      user: users.find(y => y.id === x.user_id)
    }));

    // const mezclados = products.map(x => ({
    //   ...x,
    //   user: keyedBy[x.user_id]
    // }));

    console.timeEnd('seconds');
    console.log(mezclados[0]);

  }



}
