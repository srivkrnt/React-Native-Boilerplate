import React from "react";
import COLORS from "../constants/color.constants";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export const FeatherIconWrapper = (props) => (
  <IconWrapper 
      padding = {props.padding} 
      paddingTop = {props.paddingTop} 
      paddingBottom = {props.paddingBottom}
      paddingRight = {props.paddingRight}
      paddingLeft = {props.paddingLeft}
    >
      <Feather
      name = {props.name}
      size = {props.size}
      color = {props.color ? props.color : COLORS.SECONDARY_GREY}
      />
    </IconWrapper>
)

export const MaterialIconWrapper = (props) => (
  <IconWrapper 
      padding = {props.padding} 
      paddingTop = {props.paddingTop} 
      paddingBottom = {props.paddingBottom}
      paddingRight = {props.paddingRight}
      paddingLeft = {props.paddingLeft}
    >
      <Icon
      name = {props.name}
      size = {props.size}
      color = {props.color ? props.color : COLORS.SECONDARY_GREY}
      />
    </IconWrapper>
)

export const PaperClip = (props) => (
  <FeatherIconWrapper name = "paperclip" {...props} color = {props.color ? props.color : COLORS.SECONDARY_GREY}/>
)

export const DrawerIcon = (props) => (
  <MaterialIconWrapper name = "sort" color = {COLORS.PRIMARY_GREY} {...props}/>
)

export const IconWrapper = styled.View`
  padding : ${props => props.padding ? props.padding : "0px"}
  padding-top : ${props => props.padding ? props.padding : props.paddingTop ? props.paddingTop : "0px"}
  padding-right : ${props => props.padding ? props.padding : props.paddingRight ? props.paddingRight : "0px"}
  padding-bottom : ${props => props.padding ? props.padding : props.paddingBottom ? props.paddingBottom : "0px"}
  padding-left : ${props => props.padding ? props.padding : props.paddingLeft ? props.paddingLeft : "0px"}
`;