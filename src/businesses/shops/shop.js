import React from 'react'
import styled from 'styled-components'
import ReactStars from "react-rating-stars-component"
import Avatar from '@/businesses/shops/avatar'
import calc from '@/tool/calc'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
    text-decoration: none;
`
const StyledDiv = styled.div`
    display:flex;
`
const StyledDivAvatar = styled.div`
    width: 15vw;
    height: 15vw;
    margin:10px;
`
const StyledDivInfo = styled.div`
    width: 80vw;
    height: 210px;

    .line1{
        display:flex;
        justify-content:space-between;
        .line1-1{
            font-size:200%;
            margin:3px;
            color:black;
        }
        .line1-2{
            display:flex;
            align-items:center;
            font-size:80%;
            color: grey;
            margin: 5px;
            margin-right:15px;
            padding:5px;
            background-color:gold;
            border-radius:5px;
        }
    }
    .line2{
        display:flex;
        justify-content:flex-start;
        align-items:stretch;
        .line2-1{
            display:flex;
            align-items:center;
        }
        .line2-2{
            display:flex;
            align-items:center;
            font-size:120%;
            margin-left:15px;
            color: #8888cc;
        }
    }
    .line3{
        display:flex;
        justify-content:space-between;
        .line3-1{
            font-size:120%;
            color: grey;
            margin:3px;
        }
        .line3-2{
            font-size:100%;
            color: grey;
            margin:3px;
            margin-right:15px;
        }
        .line3-3{
            margin-left:5px;
            margin-right:5px;
        }
    }
    .line4{
        display:flex;
        color: grey;
        .line4-1{
            margin-right:5px;
            padding: 3px;
            background-color:orange;
            border-radius:2px;
            color: white;
        }
    }
    .line5{
        display:flex;
        color: grey;
        margin-top:5px;
        .line5-1{
            margin-right:5px;
            padding: 3px;
            background-color:lightgreen;
            border-radius:2px;
            color: white;
        }
    }
    .line-interval{
        height:1px;
        margin-top:15px;
        margin-bottom:15px;
        background-color:#dddddd;
    }
`
export default (props) => {

    // console.log(props)

    return (
        <StyledLink to={`/seles/${props.id}`}>
            <StyledDiv>
                <StyledDivAvatar>
                    <Avatar url={props.image_url} />
                </StyledDivAvatar>
                <StyledDivInfo>
                    <div className="line1">
                        <div className="line1-1">{props.name}</div>
                        <div className="line1-2">金牌保证</div>
                    </div>
                    <div className="line2">
                        <div className="line2-1">
                            <ReactStars count={5} value={calc.getRandomInt(1, 5)} edit={false} size={24} color2={"#ffd700"} />
                        </div>
                        <div className="line2-2">月售{calc.getRandomInt(1, 100)}单</div>
                    </div>
                    <div className="line3">
                        <div className="line3-1"><span>￥{calc.getRandomInt(1, 100)}起配送</span><span className="line3-3">|</span><span>免费配送</span></div>
                        <div className="line3-2"><span>距离{calc.getRandomInt(1, 5)}公里</span><span className="line3-3">|</span><span>大约{calc.getRandomInt(1, 50)}分钟</span></div>
                    </div>
                    <div className="line-interval"></div>
                    <div className="line4">
                        <div className="line4-1"><span>减</span></div>
                        <div className="line4-2"><span>满{calc.getRandomInt(50, 100)}元减{calc.getRandomInt(10, 20)}元</span></div>
                    </div>
                    <div className="line5">
                        <div className="line5-1"><span>配</span></div>
                        <div className="line5-2"><span>商品金额满{calc.getRandomInt(70, 100)}元，配送费减{calc.getRandomInt(5, 10)}元</span></div>
                    </div>
                </StyledDivInfo>
            </StyledDiv>
        </StyledLink>
    )
}