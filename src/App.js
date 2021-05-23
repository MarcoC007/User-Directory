// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import API from './utils/API';
import Jumbotron from './components/Jumbotron';
import SearchForm from './components/SearchForm';
import Container from './components/Container';
import SearchResults from './components/SearchResults';

class App extends Component {
  state = {
    users: [],
    search: "",
    filtered: []
  };

  componentDidMount() {
    API.search()
    .then(res => {
    console.log(res);
    console.log(this.state)
    
    const mappedRes = res.data.results.map((data) => ({
      first: data.name.first,
      last: data.name.last,
      picture: data.picture.large,
      location: data.location.country,
      dob: data.dob.date,
      email: data.email
    }));
    this.setState({
      users: mappedRes, 
      filtered: mappedRes
    })
    })
   }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    }, this.filteredSearch());
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   const mappedRes = this.state.results.filter(
  //     res => 
  //     res.location.country.toLowerCase() === 
  //     this.state.search.toLowerCase() ||
  //     res.first.name.toLowerCase() === 
  //     this.state.search.toLocaleLowerCase()
  //   );
  //   if(this.state.search !== "") {
  //     this.setState({ users: mappedRes , search: ""})
  //   }
  // }

  handleFormSubmit = event => {
          event.preventDefault();
  }

  filteredSearch = () => {
    this.setState({
      filtered: this.state.users.filter((searchRes) => {
        const searchResults = {
          ...searchRes,
        }; 
        delete searchResults.picture;        
        delete searchResults.email;

        const values = Object.values(searchResults).toString().toLowerCase();
        
        return values.includes(this.state.search.toLowerCase());
      }),
    });
  };

  sortedSearch = (event) => {
      const sortedRes = this.state.results.sort((a , b) => {
       
        let firstComponent = "";
       let secondComponent = "";

       switch(event.target.name) {
             case "first":
               firstComponent = a.name.first
               secondComponent = b.name.first
               break;
             case "last":
               firstComponent = a.name.last
               secondComponent = b.name.last
               break;
             case "email":
               firstComponent = a.email
               secondComponent = b.email
               break;
            case "location":
               firstComponent = a.location.country
               secondComponent = b.location.country
               break;
            case "dob":
              firstComponent = a.dob.date
              secondComponent = b.dob.date
              break;
            case "picture":
              firstComponent = a.picture.thumbnail
              secondComponent = b.picture.thumbnail
              break;
              default:
                break;
       }
          if (firstComponent < secondComponent) {
            return -1;
          } if (firstComponent > secondComponent) {
            return 1;
          } 
          return 0;
      });
      this.setState({ filtered: sortedRes});
  }

  render(){

  return (

  <Container>
    <Jumbotron/>

    <SearchForm
    handleFormSubmit={this.handleFormSubmit}
    handleInputChange={this.handleInputChange}
    search={this.state.search}
    />
    <SearchResults users={this.state.filtered} sortedSearch={this.sortedSearch}/>
    </Container>
  );
  }
}

export default App;
