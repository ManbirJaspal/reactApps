import React from 'react';
import axios from 'axios';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      title: 'Simple country application',
      countries:[]
    };
  }

  componentDidMount() {
    console.log('component has mounted');
  }

  addCountry = (event) => {
    event.preventDefault();
    console.log('inside addCountry');

    let country_data = {
      country_name: this.refs.country_name.value,
      continent_name: this.refs.continent_name.value
    }

      axios.post('http://localhost:8082/api/new-country', country_data)
      .then(response => {
          console.log('Saved');
          this.setState(prevState=>({
            countries: [country_data, ...prevState.countries]
          }))
          console.log(response.data);
          console.log(this.state);

      });
}


    // var request = new Request('http://localhost:8082/api/new-country', {
    //   method: 'POST',
    //   headers: new Headers({'Content-Type': 'application/json' }),
    //   body: JSON.stringify(country_data)
    // });
    //
    // // fetch(request)
    //   .then(function(response) {
    //     response.json()
    //       .then(function(data) {
    //         console.log(data)
    //         })
    //       })
    //   .catch(function(err) {
    //     console.log(err)
    //   })
    // }

  render () {
    return (
      <div>
        <form ref="countryForm">
          <input type="text" ref="country_name" placeholder="country_name"></input>
          <input type="text" ref="continent_name" placeholder="continent_name"></input>
          <button onClick={this.addCountry}>Add Country</button>
          <pre>{JSON.stringify(this.state.countries)}</pre>
        </form>

  </div>
    );
  }
}



export default App;
