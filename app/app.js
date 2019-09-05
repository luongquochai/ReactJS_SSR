var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List');

ReactDOM.render( 
     <List/>,
    document.getElementById('root')
);

var obj = {
    name: 'Hai',
    age: 18
}

var obj2 = {...obj, height: 180};

obj.age = 30;
//console.log(obj2);

var mang = [5, 3, ,8 ,5];
var arr = [...mang];
mang[0] = 1000; 
console.log('Array',arr);
console.log('Mang',mang);