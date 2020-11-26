import React from 'react';
import { Actions } from "react-native-router-flux";
import styled from "styled-components/native";
import COLORS from "../../shared/constants/color.constants";
import Feather from "react-native-vector-icons/Feather";
import Icon from 'react-native-vector-icons/MaterialIcons';

export const FeatherButtonWrapper = (props) => {
    return(
        <ButtonWrapper onPress={props.action ? props.action : ()=>{}}>
            <Feather
            name = {props.name}
            size = {props.size ? props.size : 30}
            color = {props.color ? props.color : COLORS.PRIMARY_GREY}
            />
        </ButtonWrapper>
    )
}

export const IconButtonWrapper = (props) => {
    return(
        <ButtonWrapper onPress={props.action ? props.action : ()=>{}}>
            <Icon
            name = {props.name}
            size = {props.size ? props.size : 30}
            color = {props.color ? props.color : COLORS.PRIMARY_GREY}
            />
        </ButtonWrapper>
    )
}

export const BackButton = (props) => (
    <FeatherButtonWrapper name = "chevron-left" action = {props.action ? props.action : ()=>Actions.pop()} color = {props.color ? props.color : COLORS.PRIMARY_GREY} size = {props.size}/>
)

export const ButtonWrapper = styled.TouchableOpacity`
  padding-top : ${props => props.padding ? props.padding : "5px"}
  padding-left : ${props => props.padding ? props.padding : "5px"}
  padding-bottom : ${props => props.padding ? props.padding : "5px"}
  padding-right : ${props => props.padding ? props.padding : "5px"}
  margin-right : ${props => props.marginRight ? props.marginRight : "0px"}
`;

