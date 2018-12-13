import React from 'react'
import styled from 'styled-components'


const StyledImg = styled.img`
    width: 30px;
    height: 30px;
    margin:3px;
    padding:3px;
    /* border-radius: 25%; */
    /* background-color:blue; */
`
export default function IconCategory(props) {
    // console.log(props)


    // return (<StyledDiv style={{ backgroundImage: 'url(' + props.url + ')' }}></StyledDiv>)    
    return (<StyledImg src={'/img/'+props.url} alt="avatar"/>)
}