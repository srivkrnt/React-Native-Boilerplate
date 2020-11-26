import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";

class TextWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TextContainer style={this.props.style ? this.props.style[0] : null}>
        {this.props.children}
      </TextContainer>
    );
  }
}

export default TextWrapper;

const family = Platform.OS === "ios" ? "Helvetica" : "Roboto";

const TextContainer = styled.Text`
  font-size: 14px;
  font-family: ${family};
`;
