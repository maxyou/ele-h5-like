import React, { Component, Fragment } from 'react';
import { Switch, Route, NavLink, Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import iconHome from 'components/footer/iconfont/home.svg'
import iconFind from 'components/footer/iconfont/find.svg'
import iconOrder from 'components/footer/iconfont/order.svg'
import iconMy from 'components/footer/iconfont/my.svg'

const FlexBottom = styled.div`
    display: flex;
    justify-content: space-around;
    align-items:center;
    height:60px;
    /* background-color: #ccddee; */
    position: fixed;
    left:0px;
    right:0px;
    bottom:0px;
    /* overflow: hidden; */
`
const FlexButton = styled.div`

    width: 25%;
    /* height: 100%; */
    background-color: #63b383;

    a{
        width: 100%;
        height: 60px;
        text-decoration:none;

        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        
    }
    .selected{
        background-color: #93d3a3;
    }
    img{
        width:25px;
        height:25px;
    }

`

export default () => {

    return (
        <Fragment>
            <FlexBottom>
                <FlexButton>
                    <NavLink to='/home' activeClassName="selected">
                        <img src={iconHome} alt='' />
                        <div>Home</div>
                    </NavLink>
                </FlexButton>
                <FlexButton>
                    <NavLink to='/find' activeClassName="selected">
                        <img src={iconFind} alt='' />
                        <div>Find</div>
                    </NavLink>
                </FlexButton>
                <FlexButton>
                   <NavLink to='/order' activeClassName="selected">
                        <img src={iconOrder} alt='' />
                        <div>Order</div>
                   </NavLink>
                </FlexButton>
                <FlexButton>
                    <NavLink to='/my' activeClassName="selected">
                        <img src={iconMy} alt='' />
                        <div>My</div>
                    </NavLink>                        
                </FlexButton>
            </FlexBottom>
        </Fragment>
    );
  }