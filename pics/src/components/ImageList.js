import React from 'react';
import ImagesList from './ImagesList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
    const images = props.images.map((image) => { //using .map function to get information about every element in the array.
        return <ImageCard  key={image.id} image={image}  /> 
    });
    return <div className="image-list">{images}</div>
};

export default ImageList;