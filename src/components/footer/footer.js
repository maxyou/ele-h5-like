import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import iconHome from '@/components/footer/iconfont/home.svg'
import iconFind from '@/components/footer/iconfont/find.svg'
import iconFavorite from '@/components/footer/iconfont/favorite.svg'
import iconMy from '@/components/footer/iconfont/my.svg'

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
    background-color: #87cefa;

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
        background-color: #d7eefa;
        // background-color: #f3d3a3;
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
                   <NavLink to='/favorite' activeClassName="selected">
                        <img src={iconFavorite} alt='' />
                        <div>Favorite</div>
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