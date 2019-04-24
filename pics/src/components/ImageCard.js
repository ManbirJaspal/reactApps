import React from 'react';

class ImageCard extends React.Component {
    constructor(props) { //creating a Ref
        super(props);
        this.state = {spans: 0};
        
        this.imageRef= React.createRef();
    }
    
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans); //as soon as the image displays on the screen, it emits this load event.
    }
        
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        
        const spans = Math.ceil(height / 10); 
        this.setState({ spans });
        };
     
    render() {
        const { description, urls } = this.props.image; // deconstructing.
        return (
        <div style={{ gridRowEnd: `span ${this.state.spans}`}} >
            <img 
            ref={this.imageRef}
            alt={description}
            src={urls.regular}
            />
            </div>
        
        );
    }
}



export default ImageCard;