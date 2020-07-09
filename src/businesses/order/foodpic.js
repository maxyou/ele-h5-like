import React from 'react'
import styled from 'styled-components'
// import coffee from 'resources/img/coffee.jpg'
// import chicken from 'resources/img/chicken.jpg'
// import mdl from 'resources/img/mdl.jpg'
// import ricenoodle from 'resources/img/ricenoodle.jpg'
import imgs from '@/resources/img/index'

const StyledImg = styled.img`
    width: 70px;
    height: 70px;
    // margin:2px;
    padding:3px;
    /* border-radius: 25%; */
`
export default function IconCategory({imgindex}) {

    return (<StyledImg src={imgs[imgindex]} alt="avatar"/>)

//1 works
    // const u = 'img/mdl.jpg'
    // return (<img src={require('resources/' + u)} alt="avatar"/>)
//2 not works
    // const u = '/img/mdl.jpg'
    // return (<img src={require('resources' + u)} alt="avatar"/>)
//3 not works
    // const uu = 'resources/'
    // const u = 'img/mdl.jpg'
    // return (<img src={require(uu + u)} alt="avatar"/>)
//4 not works
    // const images = require.context('resources/img',false)
    // return (<img src={`${images(props.url, true)}`} alt="avatar"/>)
}