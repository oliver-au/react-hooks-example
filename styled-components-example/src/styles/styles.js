import styled from "styled-components";

const sizeS = '14px';
const sizeM = '16px';
const sizeL = '20px';

export const Wrapper = styled.div`
 display: flex;
 flex-flow: column nowrap;
 justify-content: flex-start;
 align-items: flex-start;
 align-content: center;
 padding: ${sizeS};
 border: solid 1px grey;
 background-color: ${props => (props.isPink ? "rgb(252, 230, 234)" : "rgb(199, 233, 247)")};
`

export const Avatar = styled.img`
 border-radius: ${props => (props.isRound ? `50%` : ` `)};
`

export const Name = styled.h3`
 font-size: ${sizeL};
 color: ${props => (props.isPink ? "rgb(150, 13, 58)" : "rgb(4, 46, 94)")};
`

export const Bio = styled.p`
 font-size: ${sizeM};
`

export const SocialURL = styled.a`
 text-decoration: none;
 font-size: ${sizeS};
 color: ${props => (props.isPink ? "rgb(150, 13, 58)" : "rgb(4, 46, 94)")};
`