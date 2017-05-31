
/* Se retorna siempre algo en la función, todo componente recibe un objetio props, todo estoson funciones pra hacer omponenetes */

// function Saludar(props){
// 	return <h1>Hola {props.name}</h1> 
// }


// ReactDOM.render(
// 	<div>
// 		<Saludar name="Dados" />
// 		<Saludar name="Sstre" />
// 		<Saludar name="Tilapie" />
// 		<Saludar name="Moldersor" />
// 		<Saludar name="Curcuha" />
// 	</div>,
// 	document.getElementById('componentes')
// );


/* Componente toodo junto */
// const User = props => {
// 	return(
// 		<div>
// 			<img src={props.img} alt={props.name} />
// 			<p>{props.name} Url Sitio: {props.url}</p>
// 		</div>
// 	)
// };

// ReactDOM.render(
// 	<User img="./favicon.png" name="Cristian" url="http://localhost:8080/" />,
// 	document.getElementById('componentes')
// );


/* Componentes por partes */

// const Avatar   = props => <img src={props.user.img} alt={props.user.name} />;
// const UserName = props => <p>{props.user.name}</p>
// const Link     = props => <span>{props.user.url}</span>

// const User = props =>{
// 	return(
// 		<div className = "user-item">
// 			<Avatar user ={props.user} />
// 			<UserName user = {props.user} />
// 			<Link user={props.user} />
// 		</div>
// 	)
// };

// const user = {
// 	name : 'Daniel',
// 	img  : './favicon.png',
// 	url  : 'http://localhost:8080/'
// };

// ReactDOM.render(<User user={user} />, document.getElementById('componentes'));

/* Componentes consumiendo un json */

// Json 

const teachers  = [

	{
		name : 'Joey',
		avatar  : 'avatar/avatar-icon1.png'

	},
	{
		name : 'Jay',
		avatar  : 'avatar/avatar-icon2.png'
	},
	{
		name : 'Bolton',
		avatar  : 'avatar/avatar-icon3.png'
	},
	{
		name : 'Misrcis',
		avatar  : 'avatar/avatar-icon4.png'
	},
		
	{
		name : 'Denge',
		avatar  : 'avatar/avatar-icon5.gif'
	}
];
const divStyle = {
	float : 'left'
}
const Avatar = props => <img src={props.user.avatar} alt={props.user.name} />;
const UserName = props => <p>{props.user.name}</p>;

const User = props => {
	return (
		<div className = "user-item" style ={divStyle}>
			<Avatar user={props.user} />
			<UserName user={props.user} />
		</div>
	)
};

const UsersList = props => {
	const userList = props.list.map((user, i) => <User user={user} key={i} />);
	return (
		<div className="user-list">
			{userList}
		</div>
	)
};

ReactDOM.render(
	<div>
		<UsersList list={teachers} />
	</div>, document.getElementById('componentes'));
