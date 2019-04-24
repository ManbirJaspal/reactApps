import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: []};

    //adding async keyword before onSearchsubmit lets us use the async await syntax inside the function.
   onSearchSubmit = async (term) => { 
        /*executing a get request with axios to get data from the api. First argument is the Url we are making a request to. The second argument allows us to configure the request  */
       const response = await unsplash.get('https://api.unsplash.com/search/photos',
            { 
            params: {query: term},   //query is going to take in our search term and and it to the api.  
        });
       this.setState({ images: response.data.results });
    }
    
   render() {
       return ( <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        </div>
              );
    }
};

export default App;