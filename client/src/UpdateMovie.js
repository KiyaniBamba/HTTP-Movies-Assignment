import React from "react";
import { Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";
import './index.css';

export default class UpdateMovie extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
        movie: {
        title: '',
        director: '',
        metascore: '',
        actors: ''
      }
    };
  }

  handleChange = e => {
    this.setState({
        movie: {
        ...this.state.movie,
        [e.target.name]: e.target.value
      }
    });
  };

  postMessage = e => {
    e.preventDefault();
    this.props.postMessage(this.state.movie);
  };

  render() {
    return (
        <div className='update-movie'>
        <h2> Add a new movie</h2>
        <form onSubmit={this.postMessage}>
            <FormGroup controlId='title' bsSize='large'></FormGroup>
            <FormLabel> Title</FormLabel>
            <FormControl
            autoFocus
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.movie.title} 
          />
          
            <FormLabel> Director </FormLabel>
            <FormControl
            type="text"
            name="director"
            onChange={this.handleChange}
            value={this.state.movie.director}
          />
            <FormLabel> Metascore</FormLabel>
            <FormControl
            type="text"
            name="metascore"
            onChange={this.handleChange}
            value={this.state.movie.metascore}
          />
            <FormLabel> Actors </FormLabel>
            <FormControl
            type="text"
            name="actors"
            onChange={this.handleChange}
            value={this.state.movie.actors}
          />
          {/* {this.props.postError ? (
            <ErrorMessage message={this.props.postError} />
          ) : null}
          {this.props.postSuccessMessage ? (
            <SuccessMessage message={this.props.postSuccessMessage} />
          ) : null} */}
          <Button block bsSize="large" >
          Update
        </Button>
        </form>
      </div>
    );
  } 
}