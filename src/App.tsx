import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DayRecord from './components/Records/DayRecord/DayRecord';
import AllDayRecords from './components/Records/AllDayRecords/AllDayRecords';
import EditDayRecord from './components/Records/EditDayRecord/EditDayRecord';
import CreateRecord from './components/Records/CreateRecord/CreateRecord';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import EditExercise from './components/EditExercise/EditExercise';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<BrowserRouter>
						<Navbar></Navbar>
						<Route exact path='/' component={Home} />
						<Route path='/dayrecord' component={DayRecord} />
						<Route path='/alldayrecords' component={AllDayRecords} />
						<Route path='/editdayrecord' component={EditDayRecord}/>
						<Route path='/profile' component={Profile} />
						<Route path='/createrecord' component={CreateRecord} />
						<Route path='/editexercise' component={EditExercise} />
						{/* <Footer></Footer> */}
				</BrowserRouter>
			</div>
		);
	}
}

export default App;