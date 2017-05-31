/* Aquí ya no crearemos funciones que retornan isntaxis js  para hacer componentes si no que haremos clases por que necesitamos componentes con estados por que cambiaran los datos etc.. */

// const Hello = props => {
// 	return  (
// 		<h1>{props.saludo}</h1>
// 	)

// };

// ReactDOM.render(<Hello saludo="Hola mundo" />,document.getElementById('estEventos'));


/* Estados con react */ 

// class Hello extends React.Component {
// 	constructor(props){
// 		super(props);

// 		this.state = {
// 			nombre: 'Cristian'
// 		}
// 	}

// 	despedirse() {
// 		this.setState({
// 			nombre: 'Torres'
// 		})
// 	};

// 	render() {
// 		return (
// 			<h1 onClick={(e) => this.despedirse(e)}>Hola {this.state.nombre}</h1>
// 		)
// 	}
// }

// ReactDOM.render(<Hello />,document.getElementById('estEventos'));


/* Actividad */

class Counter extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			count: 0
		}
	}

	upCount(e){
		e.preventDefault();
		this.setState(function(prevState){
			return {
				count: prevState.count + 1
			};
		});
	};

	downCount(e){
		e.preventDefault();
		this.setState(function(prevState){
			if( prevState.count >= 1 ) {
				return {
					count: prevState.count - 1
				};
			}
		});
	};

	resetCount(e){
		e.preventDefault();
		this.setState({count: 0})
	};

	render() {
		return (
			<div className="counter">
				<div className="count">{this.state.count}</div>
				<div className="changeCount">
					<a href="#" onClick={(e) => this.upCount(e)}>up</a>
					<a href="#" onClick={(e) => this.downCount(e)}>Down</a>
					<a href="#" onClick={(e) => this.resetCount(e)}>Reset</a>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<Counter />, document.getElementById('estEventos'));