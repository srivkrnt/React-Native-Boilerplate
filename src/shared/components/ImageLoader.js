import React from 'react'
import styled from "styled-components/native";

class ImageLoader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageExist: true,
            err: ''
        }
    }
    
    render(){
        return(
            <ImageWrapper 
                source = {this.state.imageExist ? this.props.source : this.props.defaultImage}
                width = {this.props.width}
                height = {this.props.height}
                onError = { (err) => {
                    this.setState({imageExist: false, err: err})
                    }
                }
            />
        )
    }
}

export default ImageLoader;

export const ImageWrapper = styled.ImageBackground`
  width : ${props => props.width}
  height : ${props => props.height}
  background-color : transparent;
`