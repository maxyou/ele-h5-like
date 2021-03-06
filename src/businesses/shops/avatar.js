import React from 'react'
import styled from 'styled-components'
import imgs from '@/resources/img/index'

const StyledImg = styled.img`
    width: 100%;
    height: 100%;    
`

export default function Avatar({url}) {
    // console.log('/img/'+url)
    // return (<StyledDiv style={{ backgroundImage: 'url(' + props.url + ')' }}></StyledDiv>)    
    return (<StyledImg src={imgs[url]} alt="avatar"/>)
}