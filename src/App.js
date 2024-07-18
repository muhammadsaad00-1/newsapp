
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import NewsComponent from './components/NewsComponent';
import {
  BrowserRouter as Router,
  Routes,
  
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component{
pageSize=15
country='us'
apiKey=process.env.REACT_APP_NEWS_KEY
  state={
    progress:0,
    darkMode: false,
  }
  setProgress=(progress)=>{
   this.setState({progress:progress})
  }
  toggleDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode }, () => {
      if (this.state.darkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      }
    });
  };

  render() {
    return (
      <div className={this.state.darkMode ? 'dark-mode' : 'light-mode'}>
        <Router>
          <NavBar toggleDarkMode={this.toggleDarkMode} darkMode={this.state.darkMode} />
         <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height='3'
      />
      
          <Routes>
            <Route path='/' element={<NewsComponent  key='general' pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='general' />}></Route>
            <Route path='/business' element={<NewsComponent  key='business' pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='business' />}></Route>
            <Route path='/entertainment' element={<NewsComponent  key='entertainment' pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='entertainment' />}></Route>
            <Route path='/health' element={<NewsComponent  key='health' pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='health' />}></Route>
            <Route path='/science' element={<NewsComponent  key='science' pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='science' />}></Route>
            <Route path='/sports' element={<NewsComponent  key='sports' pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='sports' />}></Route>
            <Route path='/technology' element={<NewsComponent  key='technology' pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='technology' />}></Route>
            </Routes>
        </Router>
      </div>
  );
  }
}

