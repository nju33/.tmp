// console.log(9);
//
// console.log(9999);
//
// console.log(9993);
// console.log(912312);
// console.log(9);
// // console.log(8);
// console.log(7);
// // console.log(6);
// // console.log(8);
// console.log(1231231283);
// console.log(999);
//
// console.log(module.hot);
console.log(911);
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Dispatcher} from 'flux';
import {Container, ReduceStore} from 'flux/utils';

render(<div>adfaa</div>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
  // module.hot.accept(err => {
  //   if (err !== null) {
  //     console.log(err);
  //   }
  // });

  module.hot.dispose(function() {
  //   console.log(99);
  //   return '';
  //   // clearInterval(timer);
  });
}
