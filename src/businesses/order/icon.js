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
    console.log('---props---')
    console.log(props)

//1 works
    const u = 'img/mdl.jpg'
    return (<img src={require('resources/' + u)} alt="avatar"/>)
//2 not works
    // const u = '/img/mdl.jpg'
    // return (<img src={require('resources' + u)} alt="avatar"/>)
//3 not works
    // const uu = 'resources/'
    // const u = 'img/mdl.jpg'
    // return (<img src={require(uu + u)} alt="avatar"/>)
}