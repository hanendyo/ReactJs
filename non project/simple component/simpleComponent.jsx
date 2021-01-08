const Card = (props) => {
    return (
        <div>
            <div className="card">
                <div className="title">{props.name}</div>
                <p>{props.job}</p>
            </div>
        </div>
    )
}

const App = () => {
    return(
        <div>
            <Card name='Indira' job='Project Manager'/>
            <Card name='Hartono' job='FrontEnd'/>
            <Card name='Putra' job='BackEnd'/>
        </div>
    )
}

ReactDOM.render(<App/>,
    document.querySelector('#root'))