import React from 'react'
import styled from 'styled-components';
import { Label, SafeAreaView, BasicFlexContainer } from '../../demo/components/ComponentWrapper';
import COLORS from '../constants/color.constants'
import { Labels } from '../constants/common.constants' 
import { Actions } from 'react-native-router-flux'
import { Platform } from 'react-native';

const platform = Platform.OS;

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mobileNumber: '',
            isMobileNumberInputFocused: false,
        }
    }

    onChangeMobileNumber = (mobileNumber) => {
        this.setState({mobileNumber : mobileNumber})
    }

    render(){
        return(
            <SafeAreaView>
                <BasicFlexContainer>
                    <FormContainer>
                        <MobileNumberContainer isFocused={this.state.isMobileNumberInputFocused}>
                            <CountryCodeContainer> 
                                <Label size={16} color={this.state.isMobileNumberInputFocused ? COLORS.BLACK : COLORS.GREY}>{Labels.COUNTRY_CODE_PLACEHOLDER}</Label>
                                <Label size={16} color={this.state.isMobileNumberInputFocused ? COLORS.BLACK : COLORS.GREY} weight="bold">{Labels.PIPE}</Label>
                            </CountryCodeContainer>
                            <Input
                                onChangeText={this.onChangeMobileNumber}
                                blurOnSubmit={true}
                                placeholder={"Mobile Number"}
                                placeholderTextColor={COLORS.GREY}
                                maxLength={10}
                                value={this.state.mobileNumber}
                                onFocus={() => {this.setState({isMobileNumberInputFocused : true})}}
                                onBlur={() => {this.setState({isMobileNumberInputFocused : false})}}
                                keyboardType={platform === 'android' ? "numeric" : "number-pad"}
                            />
                        </MobileNumberContainer>
                        <SubmitButton onPress = {() => {Actions.verify({mobileNumber : this.state.mobileNumber})}}>
                            <Label size={16} color={COLORS.WHITE} weight="bold">{Labels.CONTINUE}</Label>
                        </SubmitButton>
                    </FormContainer>
                </BasicFlexContainer>
            </SafeAreaView>
        )
    }
}

export default Login;

const FormContainer = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
`;

const CountryCodeContainer = styled.View`
  position: absolute;
  flex-direction: row;
  left : 5%;
  top : 6px;
`

const MobileNumberContainer = styled.View`
  width: 80%;
  height: 40px;
  border-width: 1px;
  border-color: ${props => props.isFocused ? COLORS.BLACK : COLORS.LIGHT_GREY}
`

const Input = styled.TextInput`
  width: 70%;
  font-size: 16px;
  padding: 5px 0px 5px 12px;
  margin-left : 20%;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 80%;
  height : 40px;
  padding: 4px;
  margin-top: 20px;
  background-color: ${COLORS.PINK};
  alignItems: center;
  justifyContent: center;
`