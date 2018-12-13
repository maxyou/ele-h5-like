import React from 'react'
import styled from 'styled-components'


const StyledImg = styled.img`
    width: 70px;
    height: 70px;
    margin:2px;
    padding:3px;
    /* border-radius: 25%; */
    /* background-color:blue; */
`
export default function IconCategory(props) {
    // console.log(props)


    // return (<StyledDiv style={{ backgroundImage: 'url(' + props.url + ')' }}></StyledDiv>)    
    return (<StyledImg src={'/img/'+props.url} alt="avatar"/>)
}