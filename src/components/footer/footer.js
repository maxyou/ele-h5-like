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
    background-color: #ccddee;
    position: fixed;
    left:0px;
    right:0px;
    bottom:0px;
    overflow: hidden;

    .selected{
        background-color: #83c393;
    }

    NavLink{
    }
    a{
        text-decoration:none;

        figure{
            display:flex;
            flex-direction:column;
            align-items:center;

            img{
                width:25px;
                height:25px;
            }
        }
    }
`

export default () => {

    return (
        <Fragment>
            <FlexBottom>
                <NavLink to='/home' activeClassName="selected">
                    <figure>
                        <img src={iconHome} alt='' />
                        <figcation>Home</figcation>
                    </figure>
                </NavLink>
                <NavLink to='/find' activeClassName="selected">
                    <figure>
                        <img src={iconFind} alt='' />
                        <figcation>Find</figcation>
                    </figure>
                </NavLink>
                <NavLink to='/order' activeClassName="selected">
                    <figure>
                        <img src={iconOrder} alt='' />
                        <figcation>Order</figcation>
                    </figure>
                </NavLink>
                <NavLink to='/my' activeClassName="selected">
                    <figure>
                        <img src={iconMy} alt='' />
                        <figcation>My</figcation>
                    </figure>
                </NavLink>                        
            </FlexBottom>
        </Fragment>
    );
  }