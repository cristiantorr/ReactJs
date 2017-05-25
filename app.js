

/*

* vanilla JS

**/


/*const el 	= document.createElement('h1');
const child = document.createElement('span'); 
el.setAttribute('id', 'title');
el.textContent = 'Hola ';
child.textContent = 'mundo';
el.appendChild(child);
document.getElementById('app').appendChild(el); */

/*

* Con React.JS

**/

const el = React.createElement(
	'h1', 
	{id:'title'}, 
	'Hola ' ,
	React.createElement('span', null, 'mundo')

);
ReactDOM.render(el,document.getElementById('app'));



/** Con React j JSX 

(JSX es una extensión de JavaScript creada por Facebook para el uso con su librería React. Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código a JavaScript.)

**/

/*const el = <h1 id="title">Hola <span>mundo</span></h1>;
ReactDOM.render(el,document.getElementById('app'));*/









