import React from 'react';
import Image from '../components/Images';

class ImageList extends React.Component({

  createList(){
    let imageList = this.props.images.map(function(character, index){
      return <Image image={character.image} key={index}/>
    })
    return imageList;
  }

  render(){
    let imageList = this.createList();
    return (
        <div id='image-list'>{imageList}</div>
      )
  }

})


export default ImageList;