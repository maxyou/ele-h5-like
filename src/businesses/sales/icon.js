import React from 'react'
import styled from 'styled-components'


export default function IconCategory(props) {
    // console.log(props)

    const StyledImg = styled.img`
        width: 30px;
        height: 30px;
        /* border-radius: 25%; */
        /* background-color:blue; */
    `

    // return (<StyledDiv style={{ backgroundImage: 'url(' + props.url + ')' }}></StyledDiv>)    
    return (<StyledImg src={'/img/'+props.url} alt="avatar"/>)
}