import React from 'react'
import styled from 'styled-components'
import FoodPic from '@/businesses/order/foodpic'
import iconMinus from '@/businesses/order/iconfont/minus-circle.svg'
import iconPlus from '@/businesses/order/iconfont/plus-circle.svg'

const StyledFood = styled.div`
    background-color: #f080c0;
    width: 99%;
    height: 25px;
    display: flex;
    align-items:stretch;
    margin-bottom:1px;
`
const StyledFoodInfo = styled.div`
    background-color: #c0d0c0;
    flex: 1 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 3px;

    .name{
        font-size:10pt;
        color:#3333ff;
        padding-left:5px;
    }
    .tips{
        font-size:8pt;
    }
    .price{
        font-size:8pt;
        color:#3333ff;
        padding-right:10px;
    }
    .welcome{
        font-size:8pt;
        color:#ff3355;
    }
`
const StyledFoodPicker = styled.div`
    background-color: #f0c040;
    width: 80px;
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

function getItem(onPick) {
    return function(item){
        return (item.pickCount > 0?
            <StyledFood key={item.id}>
                {/* <FoodPic imgindex={item.imgindex}></FoodPic> */}
                <StyledFoodInfo>
                    <div className="name">{item.name}</div>
                    <div className="price">￥{item.price * item.pickCount}元</div>
                    
                </StyledFoodInfo>
                <StyledFoodPicker>
                    <img className="minus" src={iconMinus} alt='' onClick={()=>onPick(-1, item.id)} />
                    <div>{item.pickCount?item.pickCount:0}</div>
                    <img className="plus" src={iconPlus} alt='' onClick={()=>onPick(1, item.id)} />
                </StyledFoodPicker>
            </StyledFood>
            :null)
    }
}
export default (props) => {

    // console.log('----order list----')
    // console.log(props)

    return (<div>
        {props.hotsales.map(getItem(props.hotSalesPick))}
        {props.discounted.map(getItem(props.discountedPick))}
    </div>
    )
  }