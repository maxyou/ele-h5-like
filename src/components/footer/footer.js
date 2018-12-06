import React, { Component, Fragment } from 'react';
import { Switch, Route, NavLink, Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'

const FlexBottom = styled.div`
    display: flex;
    justify-content: space-around;
    align-items:center;
    height:4rem;
    background-color: #ccddee;
    position: fixed;
    left:0px;
    right:0px;
    bottom:0px;
`

export default () => {


    return (
        <Fragment>
            <FlexBottom>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/find'>Find</NavLink>
                <NavLink to='/order'>Order</NavLink>
                <NavLink to='/my'>My</NavLink>                        
            </FlexBottom>
        </Fragment>
    );
  }