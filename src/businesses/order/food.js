import React from 'react'
import styled from 'styled-components'
import FoodPic from '@/businesses/order/foodpic'
import iconMinus from '@/businesses/order/iconfont/minus-circle.svg'
import iconPlus from '@/businesses/order/iconfont/plus-circle.svg'

const StyledFood = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items:stretch;
    margin-bottom:1px;
    background-color: white;
`
const StyledFoodInfo = styled.div`
    // background-color: white;
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 10px;

    .name{
        font-size:14pt;
        color:#3333ff;
    }
    .tips{
        font-size:8pt;
    }
    .price{
        font-size:8pt;
        color:#3333ff;
    }
    .welcome{
        font-size:8pt;
        color:#ff3355;
    }
`
const StyledFoodPicker = styled.div`
    // background-color: white;
    width: 100px;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;

    .minus{
        width: 20px;
        height: 20px;
    }
    .plus{
        width: 20px;
        height: 20px;
    }
    div{
        width:30px;
    }
`
export default (props) => {

    // console.log(props)

    return (
        <StyledFood>
            <FoodPic imgindex={props.imgindex}></FoodPic>
            <StyledFoodInfo>
                <div className="name">{props.name}</div>
                <div className="price">￥{props.price}元起</div>
                <div className="welcome">欢迎光临</div>
                
            </StyledFoodInfo>
            <StyledFoodPicker>
                <img className="minus" src={iconMinus} alt='' onClick={()=>props.onPick(-1, props.id)} />
                <div>{props.pickCount?props.pickCount:0}</div>
                <img className="plus" src={iconPlus} alt='' onClick={()=>props.onPick(1, props.id)} />
            </StyledFoodPicker>
        </StyledFood>
    )
  }