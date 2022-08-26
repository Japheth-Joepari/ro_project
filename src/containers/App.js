import { Component } from 'react';
import { connect } from 'react-redux'; //This will connect the action to reducer
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry'

//Importing the search feild which will connect with the reducer 
import { setSearchFeild, requestRobots } from '../actions'; 

// Handling state events using redux
// Map state to props reducer
const mapStateToProps = state => ({
    searchFeild: state.searchRobots.searchFeild,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
})

//Map dispatch to props: This recieves props action and dispatches action 
const mapDispatchToProps = () => (dispatch) => {
    return {

        onSearchChange: event => dispatch(setSearchFeild(event.target.value)),
        onRequestRobots: () =>  dispatch(requestRobots)
    }
}

class App extends Component {
    // constructor() { //state
    //     super()
    //     this.state = {
    //         robots : [],
    //         // searchFeild : ''
    //     }
    // }

    // The fetches the api when the App component has mounted
    componentDidMount() {
        // console.log(this.props.store.getState()); 
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then((response) => response.json())
        // .then(users => this.setState({robots: users}))
        this.props.onRequestRobots()
    }

    //hadling change events using plain state
    // onSearchChange = (event) => {
    //     this.setState({searchFeild: event.target.value}) //sets state to input data
    // }
    
    render() {
        // const { robots } = this.state
        const { searchFeild, onSearchChange, robots, isPending} = this.props
        const filteredRobots = robots.filter((robot) => { //filtering the items
            return robot.name.toLowerCase().includes(searchFeild.toLowerCase())
        })

        return isPending ?//!robots.length ?
         <h1 className='tc'> Loading ...</h1> :
            (
                <div className='tc'>
                <h1 className='f2'>Robo Friends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <ErrorBoundry>
                    <Scroll>
                        <CardList robots={filteredRobots}/> 
                    </Scroll>
                </ErrorBoundry>
                </div>
            )
        }
    }
export default connect(mapStateToProps, mapDispatchToProps)(App)