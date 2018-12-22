import React from 'react'
import styled from 'styled-components'
import FoodPic from 'businesses/order/foodpic'
import iconMinus from 'businesses/order/iconfont/minus-circle.svg'
import iconPlus from 'businesses/order/iconfont/plus-circle.svg'

const StyledFood = styled.div`
    background-color: #f080c0;
    width: 100%;
    height: 80px;
    display: flex;
    align-items:stretch;
    margin-bottom:1px;
`
const StyledFoodInfo = styled.div`
    background-color: #c0d0c0;
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
    background-color: #f0c040;
    width: 50px;
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
                    <div className="price">￥{item.price}元</div>
                    
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

    console.log('----order list----')
    console.log(props)

    return (<div>
        {props.hotsales.map(getItem(props.onPick))}
        {props.discounted.map(getItem(props.onPick))}
    </div>
    )
  }