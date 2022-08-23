import { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry'

class App extends Component {
    constructor() { //state
        super()
        this.state = {
            robots : [],
            searchFeild : ''
        }
    }

    // The fetches the api when the App component has mounted
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(users => this.setState({robots: users}))
    }

    //hadling change events
    onSearchChange = (event) => {
        this.setState({searchFeild: event.target.value}) //sets state to input data
    }
    
    render() {
        const { robots, searchFeild } = this.state
        const filteredRobots = robots.filter((robot) => { //filtering the items
            return robot.name.toLowerCase().includes(searchFeild.toLowerCase())
        })

        return !robots.length ? <h1 className='tc'> Loading ...</h1> :
            (
                <div className='tc'>
                <h1 className='f2'>Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <ErrorBoundry>
                    <Scroll>
                        <CardList robots={filteredRobots}/> 
                    </Scroll>
                </ErrorBoundry>
                </div>
            )
        }
    }
export default App