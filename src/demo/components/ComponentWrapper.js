import TextWrapper from '../../shared/components/TextWrapper';
import styled from 'styled-components';
import COLORS from '../../shared/constants/color.constants';

export const Label = styled(TextWrapper)`
  font-size: ${props => props.size ? props.size : "14px"};
  color: ${props => props.color ? props.color : COLORS.BLACK};
  font-weight: ${props => props.weight ? props.weight : "normal"};
`

export const BasicFlexContainer = styled.View`
  flex: 1;
`

export const FlexContainer = styled.View`
  flex: ${props => props.flex ? props.flex : 1};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "transparent"};
  margin: ${props => props.margin ? props.margin : 0};
  margin-right: ${props => props.marginRight ? props.marginRight : 0};
  margin-left: ${props => props.marginLeft ? props.marginLeft : 0};
  margin-top: ${props => props.marginTop ? props.marginTop : 0};
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0};
  padding: ${props => props.padding ? props.padding : 0};
  padding-left: ${props => props.paddingLeft ? props.paddingLeft : 0};
  padding-right: ${props => props.paddingRight ? props.paddingRight : 0};
  padding-top: ${props => props.paddingTop ? props.paddingTop : 0};
  padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : 0};
  flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
`

export const NonFlexContainer = styled.View`
  height: ${props => props.height ? props.height : "100%"};
  width: ${props => props.width ? props.width : "100%"};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "transparent"};
  margin: ${props => props.margin ? props.margin : 0};
  margin-right: ${props => props.marginRight ? props.marginRight : 0};
  margin-left: ${props => props.marginLeft ? props.marginLeft : 0};
  margin-top: ${props => props.marginTop ? props.marginTop : 0};
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0};
  padding: ${props => props.padding ? props.padding : 0};
  padding-left: ${props => props.paddingLeft ? props.paddingLeft : 0};
  padding-right: ${props => props.paddingRight ? props.paddingRight : 0};
  padding-top: ${props => props.paddingTop ? props.paddingTop : 0};
  padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : 0};
  flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
`

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`