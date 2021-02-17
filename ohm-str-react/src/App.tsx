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

class App extends Component {
	render() {
		return (
			<div className='App'>
				<BrowserRouter>
					<div>
						<Navbar></Navbar>
						<Route exact path='/' component={Home} />
						<Route exact path='/dayrecord' component={DayRecord} />
						<Route
							exact
							path='/alldayrecords'
							component={AllDayRecords}
						/>
						<Route
							exact
							path='/editdayrecord'
							component={EditDayRecord}
						/>
						<Route exact path='/profile' component={Profile} />
						<Route
							exact
							path='/createrecord'
							component={CreateRecord}
						/>
						{/* <Footer></Footer> */}
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;