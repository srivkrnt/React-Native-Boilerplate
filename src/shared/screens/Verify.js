import React from 'react';
import styled from 'styled-components';
import { Label, SafeAreaView, BasicFlexContainer } from '../../demo/components/ComponentWrapper';
import COLORS from '../constants/color.constants';
import { Labels } from '../constants/common.constants';
import Images from '../constants/assets.constants';
import ImageLoader from '../components/ImageLoader';
import { Platform } from 'react-native';
import { Actions } from 'react-native-router-flux'

const platform = Platform.OS;

class Verify extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            otp : {
                firstDigit: null,
                secondDigit: null,
                thirdDigit: null,
                fourthDigit: null,
            }
        }
    }

    onOtpSubmit = () => {
        Actions.dashboard();
    }

    renderOtpContainer = () => (
        <OtpContainer>
            <DigitContainer
                placeholder='*'
                ref="firstDigit"
                onChangeText={(digit) => {this.setState({otp : {...this.state.otp, firstDigit: digit}});digit && this.refs.secondDigit.focus()}}
                value={this.state.otp.firstDigit}
                maxLength={1}
                keyboardType={platform === 'android' ? "numeric" : "number-pad"}
            />
            <DigitContainer
                placeholder='*'
                ref="secondDigit"
                onChangeText={(digit) => {this.setState({otp : {...this.state.otp, secondDigit: digit}});digit && this.refs.thirdDigit.focus()}}
                value={this.state.otp.secondDigit}
                maxLength={1}
                keyboardType={platform === 'android' ? "numeric" : "number-pad"}
            />
            <DigitContainer
                placeholder='*'
                ref="thirdDigit"
                onChangeText={(digit) => {this.setState({otp : {...this.state.otp, thirdDigit: digit}});digit && this.refs.fourthDigit.focus()}}
                value={this.state.otp.thirdDigit}
                maxLength={1}
                keyboardType={platform === 'android' ? "numeric" : "number-pad"}
            />
            <DigitContainer
                placeholder='*'
                ref="fourthDigit"
                onChangeText={(digit) => {this.setState({otp : {...this.state.otp, fourthDigit: digit}})}}
                value={this.state.otp.fourthDigit}
                maxLength={1}
                keyboardType={platform === 'android' ? "numeric" : "number-pad"}
            />
        </OtpContainer>
    )

    render(){
        return(
            <SafeAreaView>
                <BasicFlexContainer>
                    <LogoContainer>
                        <ImageLoader source = {Images.VERIFY} width={120} height={120}/>
                    </LogoContainer>
                    <FormContainer>
                        <Label size={26} weight="bold"> {Labels.VERIFY_WITH_OTP} </Label>
                        <Label color={COLORS.SECONDARY_GREY}> {Labels.SENT_TO} {this.props.mobileNumber} </Label>
                        { this.renderOtpContainer() }
                        <SubmitButton onPress = {this.onOtpSubmit}>
                            <Label color={COLORS.WHITE} size={20} weight="bold"> {Labels.CONTINUE} </Label>
                        </SubmitButton>
                        <ResendButton>
                            <Label color={COLORS.PINK} size={16} weight="800"> {Labels.RESEND_OTP} </Label>
                        </ResendButton>
                    </FormContainer>
                </BasicFlexContainer>
            </SafeAreaView>
        )
    }
}

export default Verify;

const FormContainer = styled.View`
  flex: 0.7;
  alignItems: center;
  justifyContent: center;
  padding: 10px 40px 40px 40px;
`;

const LogoContainer = styled.View`
  flex: 0.3;
  alignItems: center;
  justifyContent: center;
`;

const ResendButton = styled.TouchableOpacity`
  margin-top : 20px;
`;

const DigitContainer = styled.TextInput`
  width: 12%;
  font-size: 16px;
  padding: 5px 0px 5px 12px;
  margin: 14px 10px 0px 0px;
  border-width: 1px;
  border-color: ${COLORS.SECONDARY_GREY}
`;

const OtpContainer = styled.View`
  flex-direction: row;
  alignItems: flex-start;
  justifyContent: flex-start;
`

const SubmitButton = styled.TouchableOpacity`
  width: 60%;
  height : 40px;
  padding: 4px;
  margin: 20px 0px 0px 0px;
  background-color: ${COLORS.PINK};
  alignItems: center;
  justifyContent: center;
`