import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25%;
    background-color:blue;
`

export default function Avatar({url}) {
    // console.log('/img/'+url)
    // return (<StyledDiv style={{ backgroundImage: 'url(' + props.url + ')' }}></StyledDiv>)    
    return (<StyledImg src={'/img/'+url} alt="avatar"/>)
}