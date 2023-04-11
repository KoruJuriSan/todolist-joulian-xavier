class Liste extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [{
                "title" : "defaultTask19273",
                "achieved" : false,
                "color" : "#FFFFFF"
            }]
        }
        this.defaultTask = {
            "title" : "",
                "achieved" : false,
                "color" : "#FFFFFF"
        }
    }

    addListElement() {
        this.setState({
            data : [
                ...this.state.data,
                this.defaultTask
            ]
        })
        console.log(this.state)
    }

    componentDidMount() {
        fetch("/getElements")
            .then(res => res.json())
            .then(data => this.setState(() => ({data: data})))
    }

    syncData() {
        fetch("/addElement", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.data)
        })
    }

    render() {
        return <div id="logic">
            <div id="title" className="relief">
                <h1>Todouwww-Listewww</h1>
            </div>
            <div id="buttons">
                <button className="button relief" onClick={this.addListElement.bind(this)}>
                    <img src="images/add.svg" alt="add_icon" class="button_icon"/>
                    <span className="buttontext">Ajouter</span>
                </button>
                <button className="button relief" onClick={this.syncData.bind(this)}>
                    <img src="images/folder-download.svg" alt="save_icon" class="button_icon"/>
                    <span className="buttontext">Sauvegarder</span>
                </button>
            </div>
            <div id="list" className="relief">
                {this.state.data.map((element, key) => {
                if (element.title == "defaultTask19273") return
                return <Task state={this.state} setState={this.setState.bind(this)} keyz={key} element={element}></Task>
                })}
            </div>
        </div>
    }
}

class Task extends React.Component {

    constructor(props) {
        super(props)
    }

    changeColor(e) {
        let changedData = [
            ...this.props.state.data,
        ]
        changedData[this.props.keyz] = {
            ...this.props.state.data[this.props.keyz],
            "color" : e.target.value
        }
        this.props.setState ({
            data : changedData
        })
    }

    changeTitle(e) {
        let changedData = [
            ...this.props.state.data,
        ]
        changedData[this.props.keyz] = {
            ...this.props.state.data[this.props.keyz],
            "title" : e.target.value
        }
        this.props.setState ({
            data : changedData
        })
    }

    changeAchieved(e) {
        let changedData = [
            ...this.props.state.data,
        ]
        changedData[this.props.keyz] = {
            ...this.props.state.data[this.props.keyz],
            "achieved" : e.target.checked
        }
        this.props.setState ({
            data : changedData
        })
    }

    deleteTask() {
        let changedData = this.props.state.data
        changedData.splice(this.props.keyz, 1)
        this.props.setState({
            data : changedData
        })
    }

    render() {
        return <div className="todo">
                    <div className="task">
                        <div className="circle"><input type="color" className="colorinput" value={this.props.element.color} onChange={this.changeColor.bind(this)}/></div>
                        {this.props.element.achieved? <input className="crossedout listinput" type="text" id={("taskID1781729811" + this.props.keyz)} name={("taskID1781729811" + this.props.keyz)} placeholder="Nom de la tache" value={this.props.element.title} readOnly/> : <input className="listinput" type="text" id={("taskID1781729811" + this.props.keyz)} name={("taskID1781729811" + this.props.keyz)} placeholder="Nom de la tache" value={this.props.element.title} onChange={this.changeTitle.bind(this)}/> }
                    </div>
                    <div className="todobuttons">
                        <input className="todobutton" type="checkbox" checked={this.props.element.achieved} onChange={this.changeAchieved.bind(this)}/>
                        <label htmlFor={("taskID1781729811" + this.props.keyz)} className="buttontreshold"><img src="images/pencil.svg" alt="edit_icon" className="todobutton"/></label>
                        <button className="buttontreshold" onClick={this.deleteTask.bind(this)}> <img src="images/trash.svg" className="todobutton" alt="bin_icon"/> </button>
                    </div>
            </div>
        
    }
}

class Home extends React.Component {
    render() {
        return <div id="react">
            <Liste></Liste>
        </div>
    }
}

ReactDOM.render(<Home/>, document.querySelector("#app"))  